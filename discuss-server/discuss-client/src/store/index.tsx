declare var window: Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
};
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
    State as CommentState,
    default as commentReducer,
} from './comment/reducer';

export type RootState = {
    comment: CommentState
};

const rootReducer = combineReducers<RootState>({
    comment: commentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export type Store = { getState: () => RootState; dispatch: Function };
