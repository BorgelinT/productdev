import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#FA8072',
    },
    headerTitleStyle: {
      fontSize: 40,
      fontWeight: '200',
      fontFamily: 'glades',
      color: '#fffff0'
    },
  };

  render() {
    return (
    <ImageBackground source={require('../assets/images/kaitsenbackground.png')} style={styles.container}>
      <Text style={styles.text}>Thank you for downloading Kaitsen</Text> 
      <Text style={styles.text}>Open notes to get started</Text>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    color: '#fffff0',
    fontFamily: 'glades',
    fontSize: 20
  }
});
