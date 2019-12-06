const {
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');

const blogType = require('./blog');
const pageInfoType = require('./pageInfo');

module.exports = new GraphQLObjectType({
  name: 'PaginatedBlog',
  fields: {
    pageInfo: { type: pageInfoType },
    blogs: { type: GraphQLList(blogType) },
  },
});
