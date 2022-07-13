import { applyMiddleware, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

const persistConfig = {
    key: 'main-root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

const Persistor = persistStore(store);

export { Persistor };
export default store;