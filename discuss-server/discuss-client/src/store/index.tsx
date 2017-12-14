declare var window: Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
};
import { combineReducers, createStore, compose, applyMiddleware, Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { State as CommentState, default as commentReducer } from './comment/reducer';
import { watchFetchCommentListSaga } from './comment/sagas';

export type RootState = {
    comment: CommentState;
};

const rootReducer = combineReducers<RootState>({
    comment: commentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchFetchCommentListSaga);

export type Store = { getState: () => RootState; dispatch: Function };

export type Dispatch = Dispatch<RootState>;
