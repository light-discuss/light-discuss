import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';
import '../styles/CommentList.css';

import { RootState } from '../store/index';
import { ActionCreators } from '../store/comment/reducer';
import CommentItem from './CommentItem';
import DefaultEditor from './DefaultEditor';

const mapStateToProps = (state: RootState) => ({
    isDefaultEditorFocus: state.comment.isDefaultEditorFocus,
    inputValues: state.comment.inputValues
})

const dispatchToProps = {
    changeDefaultEditorFocused: ActionCreators.ChangeDefaultEditorFocused.create,
    changeDefaultInputValues: ActionCreators.ChangeDefaultInputValues.create,
}

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;
type State = {};

class CommentList extends React.Component<Props, State> {
    render() {
        return (
            <div className="CommentList">
                <CommentItem>
                    <CommentItem isReplyComment={true}/>
                    <CommentItem isReplyComment={true}/>
                    <DefaultEditor isReplyEditor={true} onClose={this.handleEditorClose}/>
                </CommentItem>
            </div>
        );
    }

    handleEditorClose = () => {

    }
}

export default connect(
    mapStateToProps, dispatchToProps
)(CommentList);