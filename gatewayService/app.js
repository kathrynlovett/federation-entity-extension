const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const config = require('./config');

const gateway = new ApolloGateway();

const server = new ApolloServer({
    gateway,
    subscriptions: false,
    engine: {
        apiKey: config.gatewayServiceKey
    }
});
server.listen().then(({ url }) => {
    console.log(`🚀  Gateway ready at ${url}`);
});