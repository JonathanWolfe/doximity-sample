const data = require('../api-schema')();

class BlogMapper {
  _find(id) {
    return data.blogs.find(b => b.id === id)
  }

  find(id) {
    return new Blog(this._find(id))
  }

  paginate({ first, offset }) {
    let blogs = [];

    for (let i = 0; i < first; i++) {
      const foundBlog = data.blogs[offset + i]

      if (foundBlog) {
        blogs.push(new Blog(foundBlog));
      } else {
        i = first
      }
    }

    const pageInfo = {
      count: blogs.length,
      hasNextPage: ((offset + first) < data.blogs.length),
      hasPreviousPage: offset > 0,
    };

    return {
      blogs,
      pageInfo,
    }
  }

  toggleLiked(id) {
    const blog = this._find(id)
    blog.liked = !blog.liked
  }
}

class AuthorMapper {
  find(id) {
    return new Author(data.authors.find(a => a.id === id))
  }
}

const authorMapper = new AuthorMapper();
const blogMapper = new BlogMapper();

class Author {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
    this.email = obj.email
  }
}

class Blog {
  constructor(obj) {
    this.id = obj.id
    this.title = obj.title
    this.subtitle = obj.subtitle
    this.authorId = obj.authorId
    this.createdAt = obj.createdAt
    this.imageUrl = obj.imageUrl
    this.liked = obj.liked
    this.content = obj.content
  }

  get author() {
    return authorMapper.find(this.authorId)
  }
}

module.exports.authorMapper = authorMapper;
module.exports.blogMapper = blogMapper;
