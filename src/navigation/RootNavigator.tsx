import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/root-stack-param-list';

import {
  HomeScreen,
  CreateProductScreen,
  ProductDetailScreen,
} from '../screens/index';
const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootStackNav() {
  return (
    <RootStack.Navigator screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Detail" component={ProductDetailScreen} />
      <RootStack.Screen name="Create" component={CreateProductScreen} />
    </RootStack.Navigator>
  );
}
export default RootStackNav;
