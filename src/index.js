import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Routes from './routes';
//import { browserHistory } from 'react-router';
//import './assets/styles/_base/base.css';
import './assets/styles/_base/base.scss';
//import './assets/styles/_modules/_buttons.scss';

import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();


