import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CategoryScreen, ProductScreen } from '../screens';
import { COLORS } from '../contains';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
        headerTitleAlign: 'center'
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Món ăn ngon' }} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={({route}) => ({ title: route.params.categoryTitle })} />
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} options={({route}) => ({ title: route.params.productTitle })} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;