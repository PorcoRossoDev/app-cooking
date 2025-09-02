import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../contains';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeNavigation';
import SeenScreen from './SeenNavigation'
import FavoriteScreen from './FavoriteNavigation';

const Tab = createBottomTabNavigator();
const MyTab = () => {
    return (
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
                headerShown: false
            })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Trang chủ'}} />
                <Tab.Screen name="Seen" component={SeenScreen} options={{ title: 'Đã xem'}} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Yêu thích'}} />
        </Tab.Navigator>
    )
}

export default MyTab