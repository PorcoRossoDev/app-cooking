import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { COLORS } from '../contains';
import FavoriteStackScreen from '../screens/Favorite'

const FavoriteStack = createStackNavigator()
const FavoriteScreen = () => {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
        headerTitleAlign: 'left'
      }}
    >
      <FavoriteStack.Screen name="FavoriteStackScreen" component={FavoriteStackScreen} options={{ title: 'Yêu thích' }} />
    </FavoriteStack.Navigator>
  );
}

export default FavoriteScreen