const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      default: 0,
      description: 'The total number of items returned',
    },
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Do we have a page after this pagination',
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Do we have a page before this pagination',
    },
  },
});
