import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

import TabNavigator from './app/screens/navigation/TabNavigator';

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

import {
  HomeScreen,
  LoginScreen,
  ArtworkList,
  ArtworkDetail,
  ArtworkForm,
} from './app/screens';

console.disableYellowBox = true;

const StackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    ArtworkList: { screen: ArtworkList },
    ArtworkDetail: { screen: ArtworkDetail },
    ArtworkForm: { screen: ArtworkForm },
  },
  { initialRouteName: 'ArtworkList' }
);

const DrawerNavigator = createDrawerNavigator(
  {
    ArtworkList: { screen: ArtworkList },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

let Navigation = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
