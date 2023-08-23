import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MoviewList from '../screen/movielist';
import MoviewDetails from '../screen/moviewdetails';

export default function RootStack() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="MovieTabs"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Screen name="MovieTabs" component={MovieStack} />
      </Navigator>
    </NavigationContainer>
  );
}
const MovieStack = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="movieList">
      <Screen name="movieList" component={MoviewList} />
      <Screen name="movieDetails" component={MoviewDetails} />
    </Navigator>
  );
};
