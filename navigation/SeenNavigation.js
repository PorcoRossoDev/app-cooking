import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { COLORS } from '../contains';
import SeenStackScreen from '../screens/Seen'

const SeenStack = createStackNavigator()
const SeenScreen = () => {
  return (
    <SeenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
        headerTitleAlign: 'left'
      }}
    >
      <SeenStack.Screen name="SeenStackScreen" component={SeenStackScreen} options={{ title: 'Đã xem' }} />
    </SeenStack.Navigator>
  );
}

export default SeenScreen