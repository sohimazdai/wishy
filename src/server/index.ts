import express from 'express';
import path from 'path';

import { readHtmlSource } from './modules/read-html-source';
import { renderApp } from './modules/render-app';

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', async (req, res) => {
  const html = await readHtmlSource();
  const appString = renderApp(req);

  const htmlWithReactApp = html.replace('{{APP}}', appString);

  res.send(htmlWithReactApp);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
