import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App';
import store from './store';
import {Provider} from './react-redux';
ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>,document.querySelector('#root'));