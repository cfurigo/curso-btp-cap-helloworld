namespace srv.hello.world;

using { db.hello.world  } from '../db/schemas';

service MyService {

    entity MyEntity as projection on world.MyFirstEntity;

}