const faker = require('faker');

function randomNumber(min = 3, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createAuthor() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  }
}

function createBlog(author_id) {
  let content = [];

  for (let i = 0; i <= randomNumber(1,3); i++) {
    content.push(faker.lorem.paragraph());
  }

  return {
    id: faker.random.uuid(),
    author_id,
    created_at: faker.date.past(),
    image_url: faker.image.imageUrl(),
    content,
  }
}

module.exports = () => {
  let data = {
    authors: [],
    blogs: [],
  };

  for (let i = 0; i < 10; i++) {
    let author = createAuthor();
    data.authors.push(author);

    for (let j = 0; j <= randomNumber(); j++) {
      data.blogs.push(createBlog(author.id));
    }
  }

  return data;
}
