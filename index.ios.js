/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,{
  AppRegistry,
  Component
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as types from  './actiontypes';
import  calculate  from './reducers';
import App from './app';

const store = createStore(calculate);

class RNReduxDemo extends Component {
  render() {
    return (
    	<Provider store={store}>
        	<App 
        	number = {1}
	      	add={() => store.dispatch({ type: types.ADD })} 
	      	sub={() => store.dispatch({ type: types.SUB })} 
        	/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('RNReduxDemo', () => RNReduxDemo);
