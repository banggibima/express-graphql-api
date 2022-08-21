import 'graphql-import-node';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import * as schema from '../graphql/schema.graphql';
import Todo from './resolvers/todo-resolver';

const app = express();
const port = 5000;

let server: ApolloServer;

server = new ApolloServer({
  typeDefs: schema,
  resolvers: [Todo],
});

const main = async () => {
  await new Promise<void>((resolve) => {
    createServer(app).listen(port, resolve);
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/api/graphql',
  });

  console.log(`Endpoint: http://localhost:${port}${server.graphqlPath}`);
};

main();
