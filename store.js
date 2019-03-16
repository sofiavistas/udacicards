import { createStore } from 'redux';
import { persistStore, persistReducer, getStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import middleware from './middleware'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const storedStatePromise = getStoredState(persistConfig);

export const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);
