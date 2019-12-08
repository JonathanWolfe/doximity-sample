<template>
  <div class="article">
    <div class="article-hero-index">
      <a href="#">
        <img :src="post.imageUrl">
      </a>
    </div>

    <h1>{{ post.title }}</h1>
    <h2>{{ post.subtitle }}</h2>

    <p class="gray meta">
      Created: {{ post.createdAt }}
      <br>
      Liked: <input
        id="liked"
        v-model="liked"
        type="checkbox"
        name="liked"
      >
    </p>

    <p
      v-for="c in post.content"
      :key="c"
    >
      {{ c }}
    </p>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {
          imageUrl: '',
          title: '',
          subtitle: '',
          createdAt: '',
          liked: false,
          content: [],
        };
      },
    },
  },
  apollo: {},
  computed: {
    liked: {
      get() {
        return this.post.liked;
      },
      set(newValue) {
        this.post.liked = newValue;
        this.updateLiked();
      },
    },
  },
  methods: {
    updateLiked() {
      return this.$apollo
        .mutate({
          // Query
          mutation: gql`mutation ($id: String!) {
          toggleBlogLiked(id: $id) {
            id
          }
        }`,
          // Parameters
          variables: {
            id: this.post.id,
          },
        })
        .then(data => {
          // Result
          console.log(data); // we don't care about the result in this exercise
        })
        .catch(error => {
          // Error
          console.error(error); // in real apps we'd probably display an error modal
        });
    },
  },
};
</script>
