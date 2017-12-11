import * as React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <span>5条评论</span>
                <div className="FlexSpace"/>
                <span>第三方登录方式</span>
            </div>
        );
    }
}

export default Header;