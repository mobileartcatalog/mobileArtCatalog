import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ArtworkForm extends Component {
  static navigationOptions = {
    title: 'Artwork Form',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Home" onPress={() => navigate('Home')} />
      </View>
    );
  }
}
