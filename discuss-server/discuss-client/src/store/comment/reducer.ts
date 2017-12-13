import { ActionCreator } from '../action-createor';

export type CommentEditorInputValues = {
    readonly nickname: string,
    readonly content: string,
};

export const ActionCreators = {
    ChangeDefaultEditorFocused: new ActionCreator<'ChangeDefaultEditorFocused', boolean>('ChangeDefaultEditorFocused'),
    ChangeDefaultInputValues: new ActionCreator<'ChangeDefaultInputValues', CommentEditorInputValues>('ChangeDefaultInputValues'), 
}

export type Action = typeof ActionCreators[keyof typeof ActionCreators];

export type State = {
    readonly isDefaultEditorFocus: boolean,
    readonly inputValues: CommentEditorInputValues,
};

export const initialState: State = {
    isDefaultEditorFocus: false,
    inputValues: {
        nickname: '',
        content: ''
    }
};

export default function reducer(state: State = initialState, action: Action): State {
    let partialState: Partial<State> | undefined;

    if (action.type === ActionCreators.ChangeDefaultEditorFocused.type) {
        partialState = { isDefaultEditorFocus: action.payload };
    }

    if (action.type === ActionCreators.ChangeDefaultInputValues.type) {
        partialState = { inputValues: action.payload };
    }

    return partialState != null ? { ...state, ...partialState } : state;
}