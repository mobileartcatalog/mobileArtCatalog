import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import ArtworkList from '../art/ArtworkList';
import HomeScreen from '../HomeScreen';

const HamburgerNavigation = createDrawerNavigator(
  {
    ArtworkList: { screen: ArtworkList },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(HamburgerNavigation)