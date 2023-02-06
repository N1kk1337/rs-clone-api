import jsonServer from 'json-server';
import db from './db.json'

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);





server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});