const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./schema');

module.exports = graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true,
});
