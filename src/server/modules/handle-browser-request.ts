import { Request, Response } from 'express';

import { readHtmlSource } from './read-html-source';
import { renderApp } from './render-app';

export default async function handleBrowserRequest(req: Request, res: Response): Promise<void> {
  const html = await readHtmlSource();
  const appString = renderApp(req);

  const htmlWithReactApp = html.replace('{{APP}}', appString);

  res.send(htmlWithReactApp);
}
