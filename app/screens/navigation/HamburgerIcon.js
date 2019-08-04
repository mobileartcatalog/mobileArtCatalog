import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../../stylesheets/forms';

class HamburgerIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.hamburger}
        onPress={() => {
          this.props.navigation.openDrawer();
        }}
      >
        >
        <Icon name="menu" size={25} color="black" />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(HamburgerIcon);
