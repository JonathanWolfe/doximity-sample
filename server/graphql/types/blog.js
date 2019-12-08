const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');

const authorType = require('./author');

module.exports = new GraphQLObjectType({
  name: 'Blog',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    subtitle: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    imageUrl: { type: new GraphQLNonNull(GraphQLString) },
    liked: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Represents if the current user has liked this blog post'
    },
    content: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
      description: 'An array of the paragraphs of this content'
    },
    author: { type: authorType }
  },
});
