import * as express from 'express';
import "reflect-metadata";
import Server from './Server'
import dbc from './common/dbc';
import router from './routes/router';

let echo = require('./routes/echo');

// DB connect ,,,
dbc.connection();

// Server instance ,,,
const app:express.Application = Server.getInstance();

app.use('/echo', echo);
app.use('/router', router);

// PORT setting,,
const port: number = Number(process.env.PORT) || 9000;

// Server connect....
app.listen(port || 9000, ()=> {
    console.log("port = " + port);
});

