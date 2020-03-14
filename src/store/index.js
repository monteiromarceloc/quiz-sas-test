import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer }  from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import MainReducer from './MainReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  MainReducer,
  // Add new reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeWithDevTools();
const store = createStore(persistedReducer, {}, composedEnhancers);
const persistor = persistStore(store)

export { store, persistor };