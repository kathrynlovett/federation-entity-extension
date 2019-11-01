const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const path = require('path');
const fs = require('fs');

const resolvers = require('./resolvers');
const typeDefs = fs.readFileSync(path.join(__dirname, './typeDefs.graphql'));

const server = new ApolloServer({
    schema: buildFederatedSchema([
       {
            typeDefs: gql`${typeDefs}`,
            resolvers
       } 
    ])
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
