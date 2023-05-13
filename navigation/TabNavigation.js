import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Profile from '../screens/Profile';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }} >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color='black' size={24} />
                ),
            }} />

            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" color='black' size={24} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation