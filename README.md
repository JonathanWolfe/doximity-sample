## Web Development Assignment

We would like to thank you for taking the time to complete this assignment. We believe this to be an effective way at allowing you to show us your skills, on your own time, without the pressure of someone looking over your shoulder (like most live whiteboard tests). Your code will be used to help us decide if we'd like to proceed with the interview process. Please understand that completing this assignment doesn't guarantee a job or follow up interviews. We will keep you posted either way. Reach out to point of contact at Doximity with any questions.

_Note that it should take you 2-5 hours to complete this assignment._


### Setup

Run `npm install` and then boot the app with `npm run dev`

### Running Tests

Run `npm run test`

## How to Submit your Completed Assignment

1. Fork the `vue-graphql-blog` repository by visiting [this page](https://gitlab.com/doximity-review/vue-graphql-blog/forks) and clicking the fork button on the top right.
2. Create a new branch by visiting https://gitlab.com/`YOUR-GITLAB`/vue-graphql-blog/branches - name your branch after your `firstname-lastname`.
3. At this point, you can grab the SSH URL at the top of https://gitlab.com/`YOUR-GITLAB`/vue-graphql-blog, clone the repository locally and do you work on the newly created branch.
4. Visit https://gitlab.com/`YOUR-GITLAB`/vue-graphql-blog/project_members under "Add a Member" type in `doximity-review` under "Select members to invite", select a role of `Master` and click "Add to project".
5. Once you are ready to submit your work, go back to https://gitlab.com/`YOUR-GITLAB`/vue-graphql-blog and click on "Create merge Request" on the top right.
6. From the page above, title and describe your assignment. Then select `doximity-review` from the "Assignee" dropdown, and click the "Submit merge request" button.

## Please Read the Following Carefully

* Avoid pushing indentation changes to current files, this makes the changeset harder to read
* Only use the graphql server for data requests, we will reiterate this throughout the assignment
* Once completed, email a link to your Pull Request to jobs@doximity.com

* This example is setup to determine your proficiency with javascript, apollo and graphql in the vue ecosystem.  The following criteria will weigh heaviest on your code review.
 - If you used apollo (either directly with apollo client or vue-apollo) to communicate with graphql.
 - The reusability of your infinite scroll solution in other contexts.
 - Code coverage via tests, and quality of those tests.
 
* The following will not weigh heavily
 - The changes you make to css/sass styling

## Endpoints

### Nuxt
http://localhost:3000

### Graphql
http://localhost:3000/graphql

```js
query { 
  paginatedBlog(first: 5, offset: 3) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      count
    }
    blogs {
      id
      author {
        id
      }
    }
  }
}

mutation { 
  toggleBlogLiked(id: "51121d7b-8405-4d21-ab79-47f4ef312c0b") {
    id
    liked
  }
}
```

### Story 1
```
Story Title: As a reader of the blog.  I would like to see a continuous stream of blogs as I read through the blog page.

Description: Adjust the index page and its components to allow Infinite scroll of blog posts.  We should lazily request the next blog and only request 1 blog at a time to be read.

```

### Story 2
```
Story Title: As a reader I would like to be able to like or unlike any blog.

Description: Using Graphql.  Toggle the liked status of an article.
```

## What to Expect after you Submit

Our team will be notified and we'll review the submission within 2 days.  We'll check for complexity, test coverage,
and adherance to style. We're looking for clean, easy to read, maintainable code. Good test coverage, and performance considerations are a plus as well.

We know your time is valuable and appreciate you taking the time to complete this assignment.

---
