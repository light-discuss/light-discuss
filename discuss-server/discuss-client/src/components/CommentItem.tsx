import * as React from 'react';
import '../styles/CommentItem.css';

import { ResponseComment } from '../services/commentService';
import { LabelDate, DateFormatType } from './widgets/index';

const avatar = require('../assets/avatar.svg');
const FaThumbsOUp = require('react-icons/lib/fa/thumbs-o-up');
const FaCommentO = require('react-icons/lib/fa/comment-o');

type Props = {
    children?: JSX.Element[],
    key: string,
    comment: ResponseComment
};

class CommentItem extends React.Component<Props, {}> {
    render() {
        const { comment, children } = this.props;

        return (
            <div className="CommentItem">
                <div className="CommentInfo">
                    <div className="Avatar">
                        <img src={avatar} />
                    </div>
                    <div className="Info">
                        <div className="UserNickname">{comment.anonymousName || comment.username}</div>
                        <div className="Details">
                            <span>{comment.floor}楼</span>
                            <span><LabelDate time={comment.createdAt} format={DateFormatType.Distance} /></span>
                        </div>
                    </div>
                </div>
                <div className="Container-Main">
                    <div className="CommentContent">
                        <p>{comment.content}</p>
                    </div>
                    <div className="Operations">
                        {
                            !comment.isReplyComment && 
                                <a href="javascript:void(0);"><FaThumbsOUp/>赞</a> 
                        }
                        <a href="javascript:void(0);"><FaCommentO/>回复</a>
                    </div>
                    {
                        (!comment.isReplyComment && children != null) &&
                        <div className="ReplyList">
                            {children}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default CommentItem;