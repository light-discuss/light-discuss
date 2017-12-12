import * as React from 'react';
import '../styles/CommentItem.css';

const avatar = require('../assets/avatar.svg');
const FaThumbsOUp = require('react-icons/lib/fa/thumbs-o-up');
const FaCommentO = require('react-icons/lib/fa/comment-o');

interface CommentItemProp {
    children?: JSX.Element[];
    isReplyComment?: boolean;
}

class CommentItem extends React.Component<CommentItemProp, {}> {
    render() {
        const { isReplyComment } = this.props;

        return (
            <div className="CommentItem">
                <div className="CommentInfo">
                    <div className="Avatar">
                        <img src={avatar} />
                    </div>
                    <div className="Info">
                        <div className="UserNickname">康尼</div>
                        <div className="Details">
                            <span>3楼</span>
                            <span>2017.12.12 16:32</span>
                        </div>
                    </div>
                </div>
                <div className="Container-Main">
                    <div className="CommentContent">
                        <p>毕竟，明天又是新的一天。</p>
                    </div>
                    <div className="Operations">
                        {
                            !isReplyComment && 
                                <a href="javascript:void(0);"><FaThumbsOUp/>赞</a> 
                        }
                        <a href="javascript:void(0);"><FaCommentO/>回复</a>
                    </div>
                    {
                        !isReplyComment &&
                        <div className="ReplyList">
                            {this.props.children}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default CommentItem;