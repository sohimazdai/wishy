import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { stringToBuffer, decode } from 'binary-serde';
import { Provider } from 'react-redux';

import App from './components/App';

import './scss/index.scss';

import { createStoreWithPreloaded } from './store';
import { IStorage } from '../shared/models/storage';

const preloadedState: IStorage = decode(stringToBuffer((window as any).__PRELOADED_STATE__));

console.log('🤖🤖🤖🤖 preloadedState', preloadedState);
delete (window as any).__PRELOADED_STATE__;

const store = createStoreWithPreloaded(preloadedState);

console.log('🤖🤖🤖🤖 store', store.getState());
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
