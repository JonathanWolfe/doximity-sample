<template>
  <div class="row">
    <div class="section padded">
      <div class="col-4-4">
        <!-- Each Article -->
        <div class="article">
          <div class="article-hero-index">
            <a
              href="#"
            >
              <img
                :src="paginatedBlog.blogs[0].imageUrl"
              >
            </a>
          </div>
          <h1>
            {{ paginatedBlog.blogs[0].title }}
          </h1>
          <h2>
            {{ paginatedBlog.blogs[0].subtitle }}
          </h2>
          <p class="gray meta">
            Created: {{ paginatedBlog.blogs[0].createdAt }}
            <br>
            Liked: {{ paginatedBlog.blogs[0].liked }}
          </p>
          <p v-for="c in paginatedBlog.blogs[0].content">
            {{ c }}
          </p>
        </div>
      </div>
      <div class="clear" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'IndexPage',
  apollo: {
    paginatedBlog: {
      query: gql`query paginatedBlog {
        paginatedBlog {
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
    },
  },
};
</script>
