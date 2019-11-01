const users = require('./fixtures');

const resolvers = {
    Query: {
        userById: (_, { id }) => users[id]
    },
    User: {
        __resolveReference(reference) {
            return users[reference.id];
        }
    }
}

module.exports = resolvers;