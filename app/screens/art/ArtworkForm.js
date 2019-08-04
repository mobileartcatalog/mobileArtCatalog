import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/forms.js';

export default class ArtworkForm extends Component {
  static navigationOptions = {
    title: 'Enter New Artwork',
  };

  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      medium: '',
      dimensions: '',
    };
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Input
          style={styles.field}
          placeholder="title"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />
        <Input
          style={styles.field}
          placeholder="date"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />
        <Input
          style={styles.field}
          placeholder="medium"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />
        <Input
          style={styles.field}
          placeholder="dimensions"
          leftIcon={<Icon name="pencil" style={styles.icon} />}
        />
        <Button style={styles.button} title="Save Changes" />
        <Button style={styles.button} title="Clear" />
      </View>
    );
  }
}
