import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'fullstackboilerplate',
    entities: [Post],
    type: 'postgresql',
    debug: !__prod__,
    user: 'postgres',
    password: 'postgres',
  });

  const post = orm.em.create(Post, { title: 'my first post' });
  await orm.em.persistAndFlush(post);
  console.log('-------------------sql 2------------------');
  await orm.em.nativeInsert(Post, { title: 'my first post 2' });
};

main().catch((err) => {
  console.error(err);
});

console.log('hello waorld')
