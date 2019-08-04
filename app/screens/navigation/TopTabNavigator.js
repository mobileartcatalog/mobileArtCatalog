import React, {Component} from 'react';
import {Stylesheet, Text, View} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import { HomeScreen, ArtworkList, ArtworkForm } from '..';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    NewArtwork: {
      screen: ArtworkForm,
      navigationOptions: {
        tabBarLabel: 'Add New Artwork',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" color={tintColor} size={25} />
        ),
      },
    },
    ArtworkList: {
      screen: ArtworkList,
      navigationOptions: {
        tabBarLabel: 'All Artwork',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-square-outline" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      initialRouteName: 'ArtworkList',
      activeTintColor: 'orangered',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'whitesmoke',
      },
    },
  }
);

export default TopTabNavigator;
