<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    apollo: {
      type: Object,
      required: true,
    },
    queryName: {
      type: String,
      required: true,
    },
    scrollingElement: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      offset: 0,
      atBottom: false,
      hasMore: true,
    };
  },
  watch: {
    atBottom(atBottom) {
      if (atBottom) {
        this.loadNext();
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.atBottom = this.bottomVisible();
    });

    this.loadNext();
  },
  methods: {
    bottomVisible() {
      const parent = this.scrollingElement instanceof HTMLElement ? this.scrollingElement : document.documentElement;
      const scrollAmount = parent.scrollTop != null ? parent.scrollTop : window.scrollY;
      const innerHeight = parent.clientHeight;
      const elemntHeight = parent.scrollHeight;
      const bottomOfPage = (innerHeight + scrollAmount) >= (elemntHeight * 0.95);

      return bottomOfPage || (elemntHeight < innerHeight);
    },
    loadNext() {
      if (!this.hasMore || !this.apollo.queries || !this.apollo.queries[this.queryName]) return;

      this.offset += 1;
      // Fetch more data and transform the original result
      this.apollo.queries[this.queryName].fetchMore({
        // New variables
        variables: {
          offset: this.offset,
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const { blogs, pageInfo } = fetchMoreResult[this.queryName];

          this.hasMore = pageInfo.hasNextPage;

          return {
            [this.queryName]: {
              __typename: previousResult[this.queryName].__typename, // eslint-disable-line no-underscore-dangle
              blogs: [...previousResult[this.queryName].blogs, ...blogs],
              pageInfo,
            },
          };
        },
      });
    },
  },
};
</script>
