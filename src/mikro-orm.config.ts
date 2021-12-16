import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Post],
  dbName: 'fullstack',
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  type: 'postgresql',
  user: 'postgres',
  password: 'postgres',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
