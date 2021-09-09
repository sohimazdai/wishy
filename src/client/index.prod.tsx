import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { stringToBuffer, decode } from 'binary-serde';
import { Provider } from 'react-redux';

import App from './components/App';

import './scss/index.scss';

import { rootReducer } from './store';

const preloadedState = decode(stringToBuffer((window as any).__PRELOADED_STATE__));

delete (window as any).__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState as any) as any;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
