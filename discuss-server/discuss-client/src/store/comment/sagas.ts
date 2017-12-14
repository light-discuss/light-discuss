import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../../services/commentService';

import { ActionCreators } from './reducer';

function* fetchCommentList() {
    try {
        const comments = yield call(Api.fetchCommentList);
        yield put(ActionCreators.LoadCommentListSuccess.create(comments));
    } catch (e) {
        const error = e as Error;
        yield put(ActionCreators.LoadCommentListFailed.create(error.message));
    }
}

export function* watchFetchCommentListSaga() {
    yield takeEvery(ActionCreators.LoadCommentList.type, fetchCommentList);
}
