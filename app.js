/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  TextInput,
  View,
  PropTypes


} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from  './actions'

 class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

     console.log(this.props);
    return (
      <View style = {styles.container}>         
        <Text style={styles.welcome}>
          A demo about
          <Text style ={styles.red}> React Native</Text> and 
          <Text style ={styles.blue}> Redux!</Text>
        </Text>
        
        <View style = {styles.start}> 
        <Text style = {styles.number}>
           {this.props.number}
        </Text>
        </View>
       
       <View style={styles.black}></View>
    
         <TouchableHighlight style={styles.wrapper}
          onPress={this.props.add}>
          <View style = {styles.button}>
            <Text >Add</Text>
          </View>
           </TouchableHighlight>

         <TouchableHighlight style={styles.wrapper}
          onPress={this.props.sub}>
          <View style = {styles.button}>
            <Text >Sub</Text>
          </View>
           </TouchableHighlight>
        
        </View>
    );
  }
}

App.propTypes = {
  number: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',    
    alignItems: 'flex-start',    
    top: 30,  
     backgroundColor: '#FFEEFF',
  },


  start:
  {
     left: 20, 
  },
  wrapper: {
    borderRadius: 8,
    marginBottom: 8,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#aaaaFF',
    padding: 12,
    justifyContent: 'center',    
    alignItems: 'center',
  },
  
  number:{
    fontSize:30,
     top:5, 
     margin: 5,    
     bottom:5, 
  },
  input:{
    height: 40,
    width:200, 
    borderColor: 'blue',
    borderWidth: 1,
    margin: 20,   

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,   
  },
  red:{
   color:'red'
  },
  blue:{
   color:'blue'
  },
  black:{
    height:5,
    width:900,
    margin:10, 
    backgroundColor: '#000000',
  },
  resultcolor:{
     color: '#FF0000',
     fontSize: 20,
  },
});



export default connect(state => ({
    number: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);


