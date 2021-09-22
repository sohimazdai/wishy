import { combineReducers, createStore } from 'redux';
import { IStorage } from '../../shared/models/storage';
import { IWishlist } from '../../shared/models/wishlist';
import isServer from '../../shared/utils/is-server';
import { userReducer } from './items/user';
import { wishlistReducer } from './items/wishlists';

export const initialState: IStorage = {
  user: null,
  wishlists: [],
};

export const rootReducer = combineReducers({
  user: userReducer,
  wishlists: wishlistReducer,
});

export const store = createStore(
  rootReducer,
  isServer()
    ? (f) => f
    : window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const createStoreWithPreloaded = (preloaded: IStorage) => createStore(
  rootReducer,
  preloaded,
  isServer()
    ? (f) => f
    : window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
