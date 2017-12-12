import * as React from 'react';
import '../styles/CommentList.css';

import CommentItem from './CommentItem';
import DefaultEditor from './DefaultEditor';

class CommentList extends React.Component {
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
        console.log('XXXX');
    }
}

export default CommentList;