- npm install express@4.14.0 --save


express setup: 
![Image](https://github.com/weikee94/express-web-server/blob/master/images/expressone.png "express setup")



- installing mongodb and robomongo
- rename folder to mongo
- move the mongo to user directory
- create new folder name as mongo-data (this is where ur data lives)
- mongod (start the database server)
- mongo connect to the server


Start Server
- cd mongo/bin
- inside bin file (./mongod --dbpath ~/mongo-data)

![Image](https://github.com/weikee94/express-web-server/blob/master/images/mongoStartServerOne.png "start server")

![Image](https://github.com/weikee94/express-web-server/blob/master/images/mongoStartServerTwo.png "start server")

Insert Record
- inside bin (./mongo)
- db.Todos.insert({text: 'New Item'})

Find Record
- db.Todos.find()

![Image](https://github.com/weikee94/express-web-server/blob/master/images/mongoInsertOne.png "mongo insert")

![Image](https://github.com/weikee94/express-web-server/blob/master/images/mongoInsertTwo.png "mongo insert")

Robomongo (Robo 3T GUI)
![Image](https://github.com/weikee94/express-web-server/blob/master/images/robo3TGUI.png "robo 3T interface")