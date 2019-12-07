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
      Liked: {{ post.liked }}
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
};
</script>
