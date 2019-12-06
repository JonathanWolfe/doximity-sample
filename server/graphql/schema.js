const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const { blogMapper } = require('./dataMapper');

const paginatedBlog = require('./types/paginatedBlog');
const blogType = require('./types/blog');

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      toggleBlogLiked: {
        type: blogType,
        description: 'Will set blog liked to the opposite of current Boolean value',
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(_, { id }) {
          blogMapper.toggleLiked(id);
          return blogMapper.find(id);
        },
      },
    },
  }),
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      paginatedBlog: {
        type: paginatedBlog,
        args: {
          first: {
            type: GraphQLInt,
            defaultValue: 1,
            description: 'The total number of items to return',
          },
          offset: {
            type: GraphQLInt,
            defaultValue: 0,
            description: 'The index in the list you would like to select from inclusively',
          },
        },
        resolve(_, { offset, first }) {
          return blogMapper.paginate({ offset, first });
        },
      },
      blog: {
        type: blogType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(_, { id }) {
          return blogMapper.find(id);
        },
      },
    },
  }),
});

module.exports = schema;
