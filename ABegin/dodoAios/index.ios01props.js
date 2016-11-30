import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class ABegin extends Component {
  render() {
    let pic = {
      //uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      uri: 'http://m2.quanjing.com/2m/fod_liv002/fo-11171537.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('ABegin', () => ABegin);