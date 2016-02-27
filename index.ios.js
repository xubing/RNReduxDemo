/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,{
  AppRegistry,
  Component
} from 'react-native';

// import {createStore} from 'redux';

import * as types from  './commands';
import {calculate} from './reducers';
import App from './app';

// const store = createStore(calculate);

class RNReduxDemo extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('RNReduxDemo', () => RNReduxDemo);
