import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeScreen, ArtworkList, ArtworkForm } from '..';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    NewArtwork: { screen: ArtworkForm },
    ArtworkList: { screen: ArtworkList },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let icon;
        switch (routeName) {
          case 'Home':
            icon = `ios-search${focused ? '' : '-outline'}`;
            break;
          case 'NewArtwork':
            icon = `ios-new${focused ? '' : '-outline'}`;
            break;
          case 'ArtworkList':
            icon = `ios-shop${focused ? '' : '-outline'}`;
            break;
        }
        return <Ionicons name={icon} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      initialRouteName: 'ArtworkList',
      activeTintColor: '#fff',
      inactiveTintColor: '#ddd',
      style: {
        backgroundColor: '#4d535e',
      },
    },
  }
);

export default TabNavigator;
