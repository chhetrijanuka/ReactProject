import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Avatar from './Avatar';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Avatar />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
