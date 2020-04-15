import * as express from 'express';
 import * as morgan from 'morgan'
import * as path from 'path';
import { parse } from 'dotenv/types';
import cardsRouter from './Routes'
import usersRouter from './Routes'
import config from './config'
import routes from './routes'
import * as passport from 'passport'

 

const app = express();

app.use(express.static('public'));
app.use(passport.initialize())
app.use(morgan('dev'))
app.use(express.json()); 
app.use('/api', cardsRouter)
app.use('/api', usersRouter)
app.use(routes)
app.get("*", (req, res)=>  res.sendFile(path.join(__dirname, '../public/index.html')))

parseInt('3000')

app.listen(parseInt(config.port), () => console.log(`Server listening on port: ${parseInt(config.port)}`));

import'./db/index';

