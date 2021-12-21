import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "graphql";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [HelloResolver, PostResolver]
  //   })
  // })
  app.get('/', (_, res) => {
    res.send("hello");
  });

  app.listen(4000, () => {
    console.log('started on localhost:4000')
  });
};

main().catch((err) => {
  console.error(err);
});
