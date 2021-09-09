import { combineReducers, createStore } from 'redux';
import { IStorage } from '../../shared/models/storage';
import { userReducer } from './items/user';

export const initialState: IStorage = {
  user: null,
};

export const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer);
