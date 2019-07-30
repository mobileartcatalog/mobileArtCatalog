import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Mobile Art Catalog',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Artwork Form"
          onPress={() => navigate('ArtworkForm')}
        />
      </View>
    );
  }
}
