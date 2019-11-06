# federation-entity-extension
## Exploring Apollo Federation

This project is a tiny prototype to explore the functionality provided through Apollo Federation. It consists of three tiny services: the User Service, the Review Service, and the Gateway Service, which ties the first two services together. The project is set up to be used with [Apollo Graph Manager](https://www.apollographql.com/docs/graph-manager/). In order to get it to work without Graph Manager, see version 1.0.0 of the project.

<a name="using-graph-manager"></a>
### Using Graph Manager

If you would like to use it with Graph Manager, follow the steps in the Apollo documentation to create an account and a graph for this project, and then put `.env` files with the appropriate `ENGINE_API_KEY` in each service directory. In addition. the Gateway Service directory should contain a folder called _config_ with a single file called `index.js`. That file should look something like the following:
```
module.exports = {
    gatewayServiceKey: 'yourKeyHere'
};

```

Once you have those files in place with the correct API keys, you want to start up each of your federated services (User Service and Review Service), and then run the following commands in each respective service:

User Service:
```
npx apollo service:push --serviceName="User" --serviceURL="http://localhost:4001" --endpoint="http://localhost:4001"
```

Review Service:
```
npx apollo service:push --serviceName="Review" --serviceURL="http://localhost:4002" --endpoint="http://localhost:4002"
```

*Note: The ["npx"](https://www.npmjs.com/package/npx) portion of the command makes it look for apollo locally. Also, you can change the serviceName to whatever you'd like.*

---

## Getting Started

To run this tiny federation, you can either run each service independently, or you can run all three together, and access the federated schema through the Gateway Service.

After navigating to the project, you can set yourself to the correct version of Node that the project uses with the following command:
```
nvm use
```
This command looks for a `.nvmrc` file and uses whatever version of Node is specified there.

### Running the Services
In order to get the federated service running through the Gateway Service, see the [Using Graph Manager section](#using-graph-manager) above.

To run each service, you simply need to use the following command in each service directory:
```
node app.js
```

When running all three together, start up the User Service and Review Service before starting the Gateway Service, so that it can properly access its federated services.