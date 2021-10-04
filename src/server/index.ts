import express from 'express';
import path from 'path';
import connectDb from './database';
import { urlencoded, json } from 'body-parser';

import handleBrowserRequest from './modules/handle-browser-request';
import healthRouter from './routers/health';
import logRequest from './modules/log-request';
import authRouter from './routers/auth';
import isAuth from './middlewares/isAuth';
import wishlistRouter from './routers/wishlist';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(logRequest);

// Public routes
app.use('/health', healthRouter);
app.use('/auth', authRouter);

// Private routes
app.use(isAuth as any);

// Browser routes
app.get('/', handleBrowserRequest);
app.get('/wishlist/create', handleBrowserRequest);
app.get('/wish/create', handleBrowserRequest);
app.get('/wish/:id', handleBrowserRequest);
app.get('/wishlist/:id', handleBrowserRequest);

app.use('/wishlist', wishlistRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

connectDb();
