import * as React from 'react';
import '../styles/Header.css';

const FaGithub = require('react-icons/lib/fa/github');
const FaQq = require('react-icons/lib/fa/qq');
const FaWeibo = require('react-icons/lib/fa/weibo');

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <span className="bold CommentTotals">5条评论</span>
                <div className="FlexSpace"/>
                <span className="SignInLabel">第三方登录</span>
                <div className="SignInGroup">
                    <a className="Icon-SignIn" href="javascript:void(0)"><FaGithub/></a>
                    <a className="Icon-SignIn" href="javascript:void(0)"><FaQq/></a>
                    <a className="Icon-SignIn" href="javascript:void(0)"><FaWeibo/></a>
                </div>
            </div>
        );
    }
}

export default Header;