import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';

import App from '../../client/components/App';

export function renderApp(req: Request): string {
  const app = (
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToString(app);

  return html;
};
