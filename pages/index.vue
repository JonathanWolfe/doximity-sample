<template>
  <div class="row">
    <div class="section padded">
      <infinite-scroll
        :apollo="$apollo"
        query-name="paginatedBlog"
      >
        <div
          v-for="blog in paginatedBlog.blogs"
          :key="blog.id"
        >
          <div class="col-4-4">
            <!-- Each Article -->
            <Post
              :post="blog"
            />
          </div>
          <div class="clear" />
        </div>
      </infinite-scroll>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Post from '../components/post.vue';
import InfiniteScroll from '../components/infinite-scroll.vue';

export default {
  name: 'IndexPage',
  apollo: {
    paginatedBlog: {
      query: gql`query paginatedBlog ($offset: Int!) {
        paginatedBlog(offset: $offset) {
          pageInfo {
            hasNextPage
          }
          blogs {
            id
            title
            subtitle
            createdAt
            liked
            content
            imageUrl
          }
        }
      }`,
      variables: {
        offset: 0,
      },
    },
  },
  components: {
    Post,
    InfiniteScroll,
  },
};
</script>
