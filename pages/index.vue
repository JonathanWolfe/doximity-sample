<template>
  <div class="row">
    <div class="section">
      <div class="col-3-4">
        <div class="article">
          <h1>
            {{ paginatedBlog.blogs[0].title }}
          </h1>
          <h2>
            {{ paginatedBlog.blogs[0].subtitle }}
          </h2>
          <p
            v-for="c in paginatedBlog.blogs[0].content"
          >
            {{ c }}
          </p>
          <p class="meta">
            Created: {{ paginatedBlog.blogs[0].createdAt }}
          </p>
          <p class="meta">
            Liked: {{ paginatedBlog.blogs[0].liked }}
          </p>
        </div>
      </div>
      <div class="col-1-4"></div>

    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

  export default {
    name: 'IndexPage',
    apollo: {
      paginatedBlog: {
        query: gql `query paginatedBlog {
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
          }
        }
      }`,
      }
    }
  }
</script>
