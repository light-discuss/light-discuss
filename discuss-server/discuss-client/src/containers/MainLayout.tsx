import * as React from 'react';
import '../styles/MainLayout.css';

import Header from '../components/Header';
import DefaultEditor from '../components/DefaultEditor';
import CommentList from '../components/CommentList';

class MainLayout extends React.Component {
    render() {
        return (
            <div className="MainLayout">
                <Header/>
                <DefaultEditor/>
                <CommentList/>
            </div>
        );
    }
}

export default MainLayout;