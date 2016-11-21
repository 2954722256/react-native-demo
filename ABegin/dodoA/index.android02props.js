import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class ABegin extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar Dodo' />
        <Greeting name='Jaina Dodo' />
        <Greeting name='Valeera Dodo' />
      </View>
    );
  }
}

AppRegistry.registerComponent('ABegin', () => ABegin);