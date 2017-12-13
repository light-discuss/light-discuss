import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/index';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'purecss/build/pure.css';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
