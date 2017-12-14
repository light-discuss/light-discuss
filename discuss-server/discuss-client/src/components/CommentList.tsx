import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';
import '../styles/CommentList.css';

import { RootState } from '../store/index';
import { ActionCreators } from '../store/comment/reducer';
import CommentItem from './CommentItem';
// import DefaultEditor from './DefaultEditor';

const mapStateToProps = (state: RootState) => ({
    comments: state.comment.comments
});

const mapDispatchToProps = {
    loadCommentList: ActionCreators.LoadCommentList.create
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof mapDispatchToProps;
type State = {};

class CommentList extends React.Component<Props, State> {
    componentDidMount() {
        const { loadCommentList } = this.props;
        loadCommentList();
    }

    render() {
        const { comments } = this.props;

        return (
            <div className="CommentList">
                {comments.map(comment => (
                    <CommentItem key={comment.id} comment={comment}>
                        {comment.replyComments != null
                            ? comment.replyComments.map(replyComment => (
                                  <CommentItem key={replyComment.id} comment={replyComment} />
                              ))
                            : undefined}
                    </CommentItem>
                ))}
            </div>
        );
    }

    handleEditorClose = () => {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
