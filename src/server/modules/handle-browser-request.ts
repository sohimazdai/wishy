import { bufferToString, encode, stringToBuffer } from 'binary-serde';
import { Request, Response } from 'express';

import { readHtmlSource } from './read-html-source';
import { renderApp } from './render-app';

export default async function handleBrowserRequest(req: Request, res: Response): Promise<void> {
  const html = await readHtmlSource();
  const { appString, state } = renderApp(req);

  const htmlWithReactApp = html.replace('{{APP}}', appString);

  const stateString = bufferToString(encode(state));
  const htmlWithStore = htmlWithReactApp.replace('{{PRELOADED_STATE}}', stateString);

  res.send(htmlWithStore);
}
