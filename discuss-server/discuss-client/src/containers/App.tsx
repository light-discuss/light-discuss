import * as React from 'react';
import '../styles/App.css';

import MainLayout from './MainLayout';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <MainLayout />
        </div>
    );
  }
}

export default App;
