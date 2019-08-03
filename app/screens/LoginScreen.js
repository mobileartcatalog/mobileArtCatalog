import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheets/forms.js';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Input
          style={styles.field}
          placeholder="username"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />
        <Input
          style={styles.field}
          placeholder="password"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />

        <Button
          title="Login"
          onPress={() => navigate('HomeScreen')}
          style={styles.button}
        />
      </View>
    );
  }
}
