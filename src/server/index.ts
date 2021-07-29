import express from 'express';
import path from 'path';

import handleBrowserRequest from './modules/handle-browser-request';
import healthRouter from './routers/health';

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', handleBrowserRequest);
app.get('/profile', handleBrowserRequest);

app.use('/health', healthRouter)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
