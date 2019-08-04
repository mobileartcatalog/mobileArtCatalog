import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

import DrawerNavigator from './app/screens/navigation/DrawerNavigator';
import MainNavigation from './app/screens/navigation/BottomTabNavigator';
import HamburgerIcon from './app/screens/navigation/HamburgerIcon';

console.disableYellowBox = true;

export default class App extends Component {
  static navigationOptions = () => {
    return {
      headerLeft: <HamburgerIcon />,
    };
  };

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
