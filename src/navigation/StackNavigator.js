import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';
import BossDetailScreen from '../screens/BossDetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen 
        name="BossDetail" 
        component={BossDetailScreen} 
        options={{ headerTintColor: '#f5c400', headerStyle: { backgroundColor: '#1a1a1a' } }} 
      />
    </Stack.Navigator>
  );

  <Stack.Screen 
  name="BossDetail" 
  component={BossDetailScreen} 
  options={{ 
    headerTintColor: '#f5c400', 
    headerStyle: { backgroundColor: '#1a1a1a' } 
  }} 
/>
};



export default StackNavigator;