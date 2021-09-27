import path from "path";
let __dirname = path.dirname(process.argv[1]);
__dirname = __dirname.replace(/\/node_modules\/pm2\/lib/gi, '')
__dirname = __dirname.replace(/\/node_modules\/.bin/gi, '')
__dirname = __dirname.replace(/usr\/lib/ig,"home/system")
import express from "express";
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import {promisify} from "util";
import dotenv from "dotenv"
dotenv.config()
const highWaterMark =  200;
import whitelist from './whitelist/whitelist.mjs'
import config from './config.mjs'
import sse from './routes/signal/sse.mjs'
import index from './routes/main/index.mjs'
import users from './routes/main/users.mjs'
import words from './routes/main/words.mjs'
import git from './routes/main/git.mjs'
import android from './routes/main/android.mjs'
import src from './routes/main/src.mjs'
import admin from './routes/main/admin.mjs'
import io from './routes/main/io.mjs'
import rss from './routes/main/rss.mjs'
import moderator from './routes/main/moderator.mjs'
import dex from './routes/main/dex.mjs'
import docs from './routes/main/docs.mjs'
import design from './routes/main/design.mjs'
import ltd from './routes/main/ltd.mjs'
import board from './routes/main/board.mjs'
import post from './routes/main/post.mjs'
import waves from './routes/main/waves.mjs'
import bank from './routes/main/bank.mjs'
import db from './routes/main/db.mjs'

let options = {
    swaggerDefinition: {
        info: {
            title: 'API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/main/*','./routes/signal/*'],
};

let swaggerSpec = await swaggerJSDoc(options)
let app = express();
app.use(cors({ credentials: true }));
const queue = new Enqueue({
  concurrentWorkers: 4,
  maxSize: 200,
  timeout: 30000
});
app.use(queue.getMiddleware());
let corsOptions = {
  origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  }
}
app.use('/events', sse)
app.use(compression())
app.use('/', index);
app.use('/moderator', moderator);
app.use('/users', users);
app.use('/ltd', ltd);
app.use('/words', words);
app.use('/waves', waves);
app.use('/board', board);
app.use('/post', post);
app.use('/dex', dex);
app.use('/git', git);
app.use('/android', android);
app.use('/src', src);
app.use('/admin', admin);
app.use('/bank', bank);
app.use('/io', io)
app.use('/docs', docs)
app.use('/rss', rss)
app.use('/design', design)
app.use('/db', db);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use( express.static('io'));
app.use( express.static('docs/src/docs'));
app.use( express.static('docs/admin/docs'));
app.use( express.static('docs'));

app.options('/favicon.ico', cors(corsOptions))
app.get('/favicon.ico', async (req, res) => {
  res.sendFile('/favicon.ico', { root: __dirname });
})

app.options('/manifest.json', cors(corsOptions))
app.get('/manifest.json', async (req, res) => {
  res.sendFile('/manifest.json', { root: __dirname });
})

// app.options('/sw.js', cors(corsOptions))
// app.get('/sw.js', async (req, res) => {
//   res.sendFile('/sw.js', { root: __dirname });
// })

app.options('/*', cors(corsOptions))
app.get('/*', async (req, res) => {
  res.sendFile('/index.html', { root: __dirname });
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(queue.getErrorMiddleware())

export default app
