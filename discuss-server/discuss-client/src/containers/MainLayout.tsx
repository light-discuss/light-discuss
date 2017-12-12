import * as React from 'react';
import '../styles/MainLayout.css';

import Header from '../components/Header';
import DefaultEditor from '../components/DefaultEditor';
import CommentList from '../components/CommentList';

class MainLayout extends React.Component {
    render() {
        return (
            <div className="MainLayout">
                <div className="Container">
                    <Header/>
                    <div className="OriginEditor">
                        <DefaultEditor isFirstComment={true}/>                    
                    </div>
                    <CommentList/>
                </div>
            </div>
        );
    }
}

export default MainLayout;