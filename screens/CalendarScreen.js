import React, {Component} from 'react';
import { StatusBar, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import moment from 'moment';

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

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
  initialState = {
      [_today]: {disabled: true}
  }
  
  constructor() {
    super();

    this.state = {
      _markedDates: this.initialState
    }
  }
  
  onDaySelect = (day) => {
      const _selectedDay = moment(day.dateString).format(_format);
      
      let marked = true;
      let markedDates = {}
      if (this.state._markedDates[_selectedDay]) {
        marked = !this.state._markedDates[_selectedDay].marked; //kumoaa merkityn päivän
        markedDates = this.state._markedDates[_selectedDay];
      }
      markedDates = {...markedDates, ...{ marked }};
      const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: markedDates } }
      this.setState({ _markedDates: updatedMarkedDates });
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <CalendarList
          firstDay={1} //Viikko alkaa maanantaista
           theme={{
               dotColor: '#FA8072',
            }}
            current={Date()}
            pastScrollRange={4}
            futureScrollRange={12}
           
            onDayPress={this.onDaySelect}
            markedDates={this.state._markedDates}
        />
      </View>
    );
  }
}
