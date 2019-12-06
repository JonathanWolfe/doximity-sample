const faker = require('faker');

function randomNumber(min = 3, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createAuthor() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  };
}

function createBlog(authorId) {
  const content = [];

  for (let i = 0; i <= randomNumber(1, 3); i++) {
    content.push(faker.lorem.paragraph());
  }

  return {
    id: faker.random.uuid(),
    authorId,
    createdAt: faker.date.past(),
    imageUrl: faker.image.imageUrl(),
    liked: false,
    title: faker.company.catchPhrase(),
    subtitle: faker.hacker.phrase(),
    content,
  };
}

module.exports = () => {
  const data = {
    authors: [],
    blogs: [],
  };

  for (let i = 0; i < 10; i++) {
    const author = createAuthor();
    data.authors.push(author);

    for (let j = 0; j <= randomNumber(); j++) {
      data.blogs.push(createBlog(author.id));
    }
  }

  return data;
};
