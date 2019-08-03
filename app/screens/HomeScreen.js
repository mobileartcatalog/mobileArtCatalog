import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import LoginScreen from '../screens/LoginScreen';
import styles from '../stylesheets/forms';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.headlineText}>Mobile Art Catalog</Text>
        <Text style={styles.bodyText}>Welcome, user</Text>

        {/* <LoginScreen /> */}

        <Button
          title="Add New Artwork"
          onPress={() => navigate('ArtworkForm')}
          style={styles.button}
        />
        <Button
          title="View Artwork"
          onPress={() => navigate('ArtworkList')}
          style={styles.button}
        />
      </View>
    );
  }
}
