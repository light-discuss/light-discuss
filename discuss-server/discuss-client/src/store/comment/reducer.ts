import { ActionCreator } from '../action-createor';
import * as CommentApi from '../../services/commentService';

export const ActionCreators = {
    LoadCommentList: new ActionCreator<'LoadCommentList', void>('LoadCommentList'),
    LoadCommentListSuccess: new ActionCreator<'LoadCommentListSuccess', CommentApi.ResponseComment[]>(
        'LoadCommentListSuccess'
    ),
    LoadCommentListFailed: new ActionCreator<'LoadCommentListFailed', string>('LoadCommentListFailed')
};

export type EditorData = {
    originCommentId: string | null;
    isActive: boolean;
    username: string;
    content: string;
};

export type Action = typeof ActionCreators[keyof typeof ActionCreators];

export type State = {
    readonly comments: CommentApi.ResponseComment[];
    readonly editorDatas: EditorData[];
};

export const initialState: State = {
    comments: [],
    editorDatas: [
        {
            originCommentId: null,
            isActive: false,
            username: '',
            content: ''
        }
    ]
};

export default function reducer(state: State = initialState, action: Action): State {
    let partialState: Partial<State> | undefined;

    if (action.type === ActionCreators.LoadCommentListSuccess.type) {
        partialState = {
            comments: action.payload
        };
    }

    return partialState != null ? { ...state, ...partialState } : state;
}
