## Web Development Assignment

We would like to thank you for taking the time to complete this assignment. We believe this to be an effective way at allowing you to show us your skills, on your own time, without the pressure of someone looking over your shoulder (like most live whiteboard tests). Your code will be used to help us decide if we'd like to proceed with the interview process. Please understand that completing this assignment doesn't guarantee a job or follow up interviews. We will keep you posted either way. Reach out to point of contact at Doximity with any questions.

_Note that it should take you 2-5 hours to complete this assignment._


### Setup

Run `npm install` and then boot the app with `npm run dev`

### Running Tests

Run `npm run test`

## How to Submit your Completed Assignment

1. Fork the `vue-blog` repository by visiting [this page](https://gitlab.com/doximity-review/vue-blog/forks) and clicking the fork button on the top right.
2. Create a new branch by visiting https://gitlab.com/`YOUR-GITLAB`/vue-blog/branches - name your branch after your `firstname-lastname`.
3. At this point, you can grab the SSH URL at the top of https://gitlab.com/`YOUR-GITLAB`/vue-blog, clone the repository locally and do you work on the newly created branch.
4. Visit https://gitlab.com/`YOUR-GITLAB`/vue-blog/project_members under "Add a Member" type in `doximity-review` under "Select members to invite", select a role of `Master` and click "Add to project".
5. Once you are ready to submit your work, go back to https://gitlab.com/`YOUR-GITLAB`/vue-blog and click on "Create merge Request" on the top right.
6. From the page above, title and describe your assignment. Then select `doximity-review` from the "Assignee" dropdown, and click the "Submit merge request" button.

## Please Read the Following Carefully

* Feel free to take advantage to take advantage of any features of [nuxt](https://nuxtjs.org/) such as vuex or middleware.
* The test included is a placeholder, better tests are encouraged particularly for logic you added.  Feel free to
switch the testing framework for either e2e or unit.
* Avoid pushing indentation changes to current files, this makes the changeset harder to read.
* Only use the endpoints specified, we will reiterate this throughout the assignment.
* Once completed, email a link to your Pull Request to jobs@doximity.com

## Endpoints

### Nuxt
http://localhost:3000

### API

|What|Location|
Documentation
- http://localhost:3000/api

#### Blogs
http://localhost:3000/api/blogs

Query Params
 - _page -> the page to display
 - _limit -> The limit

#### Author
http://localhost:3000/api/authors

Query Params
 - q = full text search

example searching for text
http://localhost:3000/api/authors?q=text

### Story 1

```
Story Title: As a reader I would like to see all articles displayed so that I can read the blog.

Description: You will find a blank index page with boilerplate for an index page.  When this page is opened display a
 page with the first 10 blog posts from the site.  In the header, create a link to the blog along with a count of how
 many blogs are in the site.
```

### Story 2
```
Story Title: As a reader I would like see the full contents of a blog and relevant content related to the blog's author.

Description: Create a Page to display a full blog post along with a list of the Authors other blogs that are on the
site.

```

### Story 3
```
Story Title: As a reader I would like to search the blog so that I can find articles which interest me.

Description: Leverage the current sidebar HTML under 'Search Articles' to provide search functionality.  When an
article is selected, navigate to a 'show view for the article'
```


## What to Expect after you Submit

Our team will be notified and we'll review the submission within 2 days.  We'll check for complexity, test coverage,
and adherance to style. We're looking for clean, easy to read, maintainable code. Good test coverage, and performance considerations are a plus as well.

We know your time is valuable and appreciate you taking the time to complete this assignment.

---
