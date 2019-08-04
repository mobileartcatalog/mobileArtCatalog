import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import {
  HomeScreen,
  LoginScreen,
  ArtworkList,
  ArtworkListRow,
  ArtworkDetail,
  ArtworkForm,
} from '..';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTab = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
});

const FormTab = createStackNavigator({
  ArtworkForm: { screen: ArtworkForm },
});

const ArtworkTab = createStackNavigator({
  ArtworkList: { screen: ArtworkList },
  ArtworkListRow: { screen: ArtworkListRow },
  ArtworkDetail: { screen: ArtworkDetail },
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    Form: {
      screen: FormTab,
      navigationOptions: {
        tabBarLabel: 'New Artwork',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" color={tintColor} size={25} />
        ),
      },
    },
    Art: {
      screen: ArtworkTab,
      navigationOptions: {
        tabBarLabel: 'Artwork',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-square-outline" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      initialRouteName: 'Art',
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'whitesmoke',
        paddingVertical: 10,
      },
    },
  }
);

export default createAppContainer(BottomTabNavigator);
