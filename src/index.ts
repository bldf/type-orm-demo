import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("将新用户插入数据库    ...");
    const user = new User();
    user.userName = "Timber";
    user.password = "Saw";
    user.enable = 1;
    user.cid = '12' ;
    await connection.manager.save(user);
    console.log("保存了一个id为新用户    : " + user.id);

    console.log("从数据库加载用户...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("在这里，您可以设置和运行express / koa /任何其他框架k.");

}).catch(error =>{
    console.log('程序报错了。。。。')
    console.log(error)
});
