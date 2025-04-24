import {combineReducers, configureStore} from '@reduxjs/toolkit';
import homeReducer from '../screens/redux/homeSlice';
import {all} from 'redux-saga/effects';
import {watchHome} from '../screens/redux/homeSaga';

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  homeReducer,
});

function* rootSaga() {
  yield all([watchHome()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: true}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
