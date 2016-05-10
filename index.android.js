/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class VSTSCDSample extends Component {
  componentDidMount(){
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE, updateDialog: true });
  }  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I'm ready for CodePush!
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('VSTSCDSample', () => VSTSCDSample);
