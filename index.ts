import jsonServer from 'json-server';
import db from './db.json'

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3004;

server.use(middlewares);


// server.get('/users', (req, res) => {

//     const { id } = req.query;

//     if (!db.users.find(user => user.id === +id!)) {
//         return res.status(404).send('User with such id was not found')
//     }
//     }
// )

server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});