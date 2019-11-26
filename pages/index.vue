<template>
  <div class="row">
    <div class="section padded">
      <div class="col-3-4">

        <!-- Each Article -->
        <div class="article">
          <div class="article-hero">
            <a
              href="#"
            >
              <img
                src="https://unsplash.it/1800/600?random&time=1492544777142"
                loading="lazy"
              />
            </a>
          </div>
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
          <p class="gray meta">
            Created: {{ paginatedBlog.blogs[0].createdAt }}
            <br />
            Liked: {{ paginatedBlog.blogs[0].liked }}
          </p>
          <a
            href="#"
            class="btn blue solid"
          >
            Read Article <i class="icon-arrow-right-outline" />
          </a>
        </div>

        <!-- Pagination -->
        <div class="article-pagination">
          <div class="pagination">
            <a
              href="#"
              class="page-previous"
            >
              <i class="icon-arrow-left-outline" />
            </a>
            <a
              href="#"
              class="page-current"
            >
              1
            </a>
            <a
              href="#"
              class=""
            >
              2
            </a>
            <a
              href="#"
              class=""
            >
              3
            </a>
            <a
              href="#"
              class="page-next"
            >
              <i class="icon-arrow-right-outline" />
            </a>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-1-4">
        <h2>More by this Author</h2>
        <ul>
          <li>
            <a href="#">An Article</a>
          </li>
          <li>
            <a href="#">An Article</a>
          </li>
          <li>
            <a href="#">An Article</a>
          </li>
        </ul>
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
