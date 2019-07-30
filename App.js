import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ArtworkForm from './screens/ArtworkForm';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ArtworkForm: { screen: ArtworkForm },
});

const App = createAppContainer(MainNavigator);

export default App;
