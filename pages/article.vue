<template>
  <div class="article-page-show">
    <div
      class="row article-hero-show"
      style="background-image: url('https://unsplash.it/1800/600?random&time=1492544777142')"
    />
    <div class="row">
      <div class="section narrow-large">
        <div class="article-body">
          </div>
          <h1>
            {{ paginatedBlog.blogs[0].title }}
          </h1>
          <h2>
            {{ paginatedBlog.blogs[0].subtitle }}
          </h2>
          <p class="gray meta">
            Created: {{ paginatedBlog.blogs[0].createdAt }}
            <br />
            Liked: {{ paginatedBlog.blogs[0].liked }}
          </p>
          <p
            v-for="c in paginatedBlog.blogs[0].content"
          >
            {{ c }}
          </p>
          <hr />
          <p class="center">
            <a
              href="/"
            >
              <i class="icon-arrow-left-outline" /> More Articles
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

  export default {
    name: 'ArticlePage',
    apollo: {
      paginatedBlog: {
        query: gql `query paginatedBlog {
        paginatedBlog {
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
