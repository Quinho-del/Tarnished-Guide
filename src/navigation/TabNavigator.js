import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';;

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import JourneyScreen from '../screens/JourneyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home': iconName = focused ? 'home' : 'home-outline'; break;
            case 'Discover': iconName = focused ? 'search' : 'search-outline'; break;
            case 'Journey': iconName = focused ? 'map' : 'map-outline'; break;
            case 'Profile': iconName = focused ? 'person' : 'person-outline'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f5c400', // Dourado Elden Ring
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#1a1a1a', borderTopWidth: 0 },
        headerShown: false,
      })}
    >
  <Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Discover" component={DiscoverScreen} />
<Tab.Screen name="Journey" component={JourneyScreen} />
<Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;