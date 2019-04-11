import React, {Component} from 'react';
import { Platform, StatusBar} from 'react-native';
import {CalendarList} from 'react-native-calendars';

export default class CalendarsList extends Component {
  static navigationOptions = {
    title: 'Calendar',
    headerStyle: {
      marginTop: StatusBar.currentHeight , //jättää statuspalkin pituuden verran tilaa yläreunaan, jotta logo ei jää sen alle
      backgroundColor: '#FA8072',
    },
    headerTitleStyle: {
      fontSize: 40,
      fontWeight: '200',
      fontFamily: 'glades',
      color: '#fffff0'
    },
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CalendarList current={Date()} pastScrollRange={12} futureScrollRange={2} />
    );
  }
}