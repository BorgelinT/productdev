import React from 'react';
import {View, Text} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
    <View>
      <Text>Thank you for downloading Kaitsen, open notes to get started</Text>
    </View>
    );
  }
}