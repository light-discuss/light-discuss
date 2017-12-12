import * as React from 'react';
import '../styles/DefaultEditor.css';

import * as classNames from 'classnames';

const avatar = require('../assets/avatar.svg');

class DefaultEditor extends React.Component {
    state = {
        isFirstComment: true,
        focused: false
    };

    render() {
        return (
            <div className="DefaultEditor">
                {
                    this.state.isFirstComment &&
                        <div className="EditorHeader">
                            <span>快来坐沙发吧...</span>
                        </div>
                }
                <div className={classNames('pure-form', 'EditorBody', {focused: this.state.focused})}>
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
                        <button className="pure-button" onClick={this.handleEditCancel}>取消</button>
                        <button className="pure-button">确定</button>
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
        this.setState({
            focused: false
        });
    }
}

export default DefaultEditor;