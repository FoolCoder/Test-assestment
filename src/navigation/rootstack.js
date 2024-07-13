import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MoviewList from '../screen/movielist';
import MoviewDetails from '../screen/moviedetails';
import SearchMovies from '../screen/searchmovies';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabbar from '../navigation/tabbar';
import Dashboard from '../screen/dashboard';
import Media from '../screen/media';
import More from '../screen/more';

export default function RootStack() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="MovieTabs"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Screen name="MovieTabs" component={MovieBottomTabBar} />
      </Navigator>
    </NavigationContainer>
  );
}
const MovieBottomTabBar = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      tabBar={props => <Tabbar {...props} />}
      initialRouteName="MovieStack"
      screenOptions={{headerShown: false, unmountOnBlur: true}}>
      <Screen name="Dashoard" component={Dashboard} />
      <Screen name="MovieStack" component={MovieStack} />
      <Screen name="Media" component={Media} />
      <Screen name="More" component={More} />
    </Navigator>
  );
};
const MovieStack = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{animation: 'slide_from_right'}}
      initialRouteName="movieList">
      <Screen
        name="movieList"
        component={MoviewList}
        options={{headerShown: false}}
      />
      <Screen
        name="movieDetails"
        component={MoviewDetails}
        options={{headerShown: false}}
      />
      <Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
