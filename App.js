import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './app/components/home';
import Dashboard from './app/components/Dashboard';



const AppNavigator = createStackNavigator({
  home: Home,
  dashboard: Dashboard
});


export default createAppContainer(AppNavigator);