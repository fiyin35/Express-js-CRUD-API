import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Router/users.js';


const app = express();

const PORT = 4000;

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (res, req) => console.log('you are at the homepage'))

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

