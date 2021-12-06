import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { Options } from "@mikro-orm/core";

const microConfig: Options =  {
  entities: [Post],
  dbName: 'fullstackboilerplate',
  type: 'postgresql',
  user: 'postgres',
  password: 'postgres',
  debug: !__prod__,
};

export default microConfig;