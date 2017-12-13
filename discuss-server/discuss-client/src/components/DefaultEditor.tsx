import * as React from 'react';
import '../styles/DefaultEditor.css';

import * as classNames from 'classnames';

const TiPencil = require('react-icons/lib/ti/pencil');
const avatar = require('../assets/avatar.svg');

export interface DefaultEditorProp {
    isFirstComment?: boolean;
    isReplyEditor?: boolean;
    onClose?: () => void;
}

type State = {
    isFirstComment: boolean,
    focused: boolean
};

class DefaultEditor extends React.Component<DefaultEditorProp, State> {
    state = {
        isFirstComment: true,
        focused: false
    };

    render() {
        const { isFirstComment, isReplyEditor } = this.props;
        const focused = this.state.focused || isReplyEditor;

        return (
            <div className="DefaultEditor">
                {
                    this.state.isFirstComment &&
                        <div className="EditorHeader">
                        {
                            isFirstComment && <span>快来坐沙发吧...</span>
                        }
                        {
                            isReplyEditor && <span><TiPencil/>添加新评论</span>
                        }   
                        </div>
                }
                <div className={classNames('pure-form', 'EditorBody', {focused: focused})}>
                    <div className="InputContainer-Nickname">
                        <label htmlFor="nickname">昵称</label>
                        <input
                            id="nickname"
                            className="Input-Nickname"
                            type="text"
                            required={true}
                            placeholder="请输入您的昵称"
                        />
                        <span className="Info">*必填</span>
                    </div>
                    <div className="InputContainer-Content">
                        <label htmlFor="content">
                            <span>内容</span>
                            <img src={avatar} />
                        </label>
                        <textarea
                            id="content"
                            className="Input-Content"
                            required={true}
                            onFocus={this.handleContentInputFocused}
                            placeholder="请输入您的留言..."
                        />
                    </div>
                    <div className="ButtonGroup">
                        <div className="FlexSpace"/>
                        <button className="pure-button button-opacity" onClick={this.handleEditCancel}>取消</button>
                        <button className="pure-button button-success">确定</button>
                    </div>

                </div>
            </div>
        );
    }

    handleContentInputFocused = () => {
        this.setState({
            focused: true
        });
    }

    handleEditCancel = () => {
        const { isReplyEditor, onClose } = this.props;

        if (isReplyEditor) {
            if (onClose != null) {
                onClose();
            }
        } else {
            this.setState({
                focused: false
            });
        }
    }
}

export default DefaultEditor;