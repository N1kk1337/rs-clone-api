import jsonServer from 'json-server';
import db from './db.json'

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3004;

server.use(middlewares);

const fs = require('fs');
server.use((req, res, next) => {
    const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
    // что ещё писать в логи?
    fs.appendFileSync('log.txt', log + '\n');
  
    next();
  });

// server.use((req, res, next) => {
//     if (req.method === 'GET' && req.url.match(/\/users\/\d+$/)) {
//       const userId = parseInt(req.url.split('/').pop()!);
//       const user = router.db.get('users').find({ id: userId }).value();
//       if (!user) {
//         res.status(404).send({ error: 'User with such id was not found' });
//         return;
//       }
//     }
//     next();
//   });


server.use(router);

server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});