import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';

import ArtworkListRow from '../art/ArtworkListRow';
import ArtworkList from '../art/ArtworkList';
import ArtworkForm from '../art/ArtworkForm';
import HomeScreen from '../HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: BottomTabNavigator,
  },
  {
    initialRouteName: 'Tabs',
    contentComponent: props => {
      return (
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <Text
              onPress={() => {
                props.navigation.navigate('ArtworkForm');
                props.navigation.closeDrawer();
              }}
            >
              BlueScreen
            </Text>
            <Text
              onPress={() => {
                props.navigation.navigate('ArtworkList');
                props.navigation.closeDrawer();
              }}
            >
              DefaultScreen
            </Text>
          </SafeAreaView>
        </ScrollView>
      );
    },
  }
);
const Stack = createStackNavigator({
  Drawer: {
    screen: HamburgerNavigation,
    navigationOptions: {
      header: null,
    },
  },
  ArtworkList: ArtworkList,
  DefaultScreen: {
    screen: HomeScreen,
  },
});
export default createAppContainer(Stack);
