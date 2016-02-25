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
  View
} from 'react-native';

class RNReduxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This a Demo how to use 
          <Text style ={styles.red}> React Native</Text> and 
          <Text style ={styles.blue}> Redux!</Text>
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,   
  },
  red:{
   color:'red'
  },
  blue:{
   color:'blue'
  },
  
  black:{
     backgroundColor: '#000000',
  },
  resultcolor:{
     backgroundColor: '#EE00FF',
  },

});

AppRegistry.registerComponent('RNReduxDemo', () => RNReduxDemo);
