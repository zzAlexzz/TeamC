import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import WuxianScreen from '../screens/WuxianScreen';
import WangjiScreen from '../screens/WangjiScreen';
import MainScreen from '../screens/MainScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="诺" />
    <BottomNavigationTab title="魏" />
    <BottomNavigationTab title="蓝" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="main" component={MainScreen} />
    <Screen name="wuxian" component={WuxianScreen} />
    <Screen name="wangji" component={WangjiScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
