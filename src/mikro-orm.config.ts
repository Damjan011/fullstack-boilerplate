import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: 'fullstack',
  migrations: {
    path: './migrations',
    pattern: /^[\w-]+\d+\.ts$/,
  },
  type: 'postgresql',
  user: 'postgres',
  password: 'postgres',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
