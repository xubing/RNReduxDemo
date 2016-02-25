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
  TextInput,
  View
} from 'react-native';

class RNReduxDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {input1: '1',input2: '1',result:'2', operator:'+'};
  }

  onChange(){
    let value1 = parseInt(this.state.input1)
    let value2 = parseInt(this.state.input2)
    let revalue = value1+value2
    console.log(revalue)
    this.setState({result:revalue.toString()})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This a Demo how to use 
          <Text style ={styles.red}> React Native</Text> and 
          <Text style ={styles.blue}> Redux!</Text>
        </Text>

        <TextInput 
          style={styles.input}    
          keyboardType="numeric"
          returnKeyType="next"
          onChangeText={(input1) => this.setState({input1}) }
          onEndEditing = {()=>this.onChange()}          
          value= {this.state.input1}>
        </TextInput>

        <Text style = {styles.operator}>
           {this.state.operator}
        </Text>

        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(input2) => this.setState({input2})}
          onEndEditing = {()=>this.onChange()}
          value={this.state.input2}>          
        </TextInput>
        <Text style = {styles.operator}>
           ={this.state.result}
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
    
  },
  operator:{
    fontSize:20,

  },
  input:{
    height: 40,
    width:300, 
    borderColor: 'blue',
    borderWidth: 1,
    margin: 20,   

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
  blackborder:{
    height: 20,
    backgroundColor: '#333333'
  },

  black:{
     backgroundColor: '#000000',
  },
  resultcolor:{
     backgroundColor: '#EE00FF',
  },

});

AppRegistry.registerComponent('RNReduxDemo', () => RNReduxDemo);
