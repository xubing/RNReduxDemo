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
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {number: 1 };
    // this.clickAdd = this.
  }

  // clickAdd :()=>this.props.Add()
  // clickSub :()=>this.props.Sub()
  render() {
    return (
       /** 
        *title 
        */
      <View style = {styles.container}>         
        <Text style={styles.welcome}>
          A demo about
          <Text style ={styles.red}> React Native</Text> and 
          <Text style ={styles.blue}> Redux!</Text>
        </Text>
        
        <View style = {styles.start}> 
        <Text style = {styles.operator}>
           {this.state.number}
        </Text>
        </View>
       
       <View style={styles.black}></View>
    

         <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            'He',
          )}>

          <View style = {styles.button}>
            <Text >Add</Text>
          </View>
           </TouchableHighlight>


         <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            'He',
          )}>

          <View style = {styles.button}>
            <Text >Sub</Text>
          </View>
           </TouchableHighlight>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',    
    alignItems: 'flex-start',    
    top: 30,  
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
  
  operator:{
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


