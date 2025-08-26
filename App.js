import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from './contains';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Home Screen</Text>
    </View>
  );
}

function SeenScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Seen Screen</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>⚙️ Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({  
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused
                  ? 'home'
                  : 'home-outline';
                break;
              case 'Seen':
                iconName = focused ? 'eye' : 'eye-outline';
                break;
              case 'Favorite':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              default:
                iconName = 'alert-circle';
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.second,
          tabBarInactiveTintColor: COLORS.second,
          tabBarStyle: { 
            backgroundColor: COLORS.primary,
            height: 65,
            paddingBottom: 10
          },
          tabBarLabelStyle: {
            fontSize: 13
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ'}} />
        <Tab.Screen name="Seen" component={SeenScreen} options={{ title: 'Đã xem'}} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Yêu thích'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
