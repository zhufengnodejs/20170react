/** npm install react redux react-redux redux-thunk redux-logger -S**/
import React from 'react';
import {render} from 'react-dom';
let store = require('./store');
import {Provider} from 'react-redux';
import App from './components/App';
render(<Provider store={store}>
  <App/>
</Provider>,document.querySelector('#root'));
