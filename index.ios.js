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

import * as types from  './commands';
// import calculate from './reducers';
import * as reducers from './reducers';
import App from './app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


class RNReduxDemo extends Component {
  render() {

  	// number = store.getState();
    // console.log(number);

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
