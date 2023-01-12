import {
  combineReducers,
  configureStore,
  // StoreEnhancer,
} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import autoLevelMerge2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import '../config/reactotron';

// import exemploReducer from './modules/REDUX_MODULE/slice'; --> IMPORT DO SLICE

const rootPersistConfig: PersistConfig<any> = {
  version: 2,
  debug: __DEV__,
  key: 'OnboardingStorage',
  whitelist: ['onboarding'],
  storage: EncryptedStorage,
  stateReconciler: autoLevelMerge2,
  transforms: [createWhitelistFilter('onboarding', ['selectedKey'])],
};

const reducers = combineReducers({
  // EXEMPLO: exemploReducer,
});

const persisted = persistReducer<ReturnType<typeof reducers>>(
  rootPersistConfig,
  reducers,
);

// const middlewares = __DEV__ && console.tron.createEnhancer?.();

// const enhancers = __DEV__ ? ([middlewares] as StoreEnhancer[]) : undefined;

const store = configureStore({
  reducer: persisted,
  // enhancers,
  devTools: __DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        immutableCheck: false,
        serializableCheck: false,
      },
    }),
});

// const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppGetState = () => RootState;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
