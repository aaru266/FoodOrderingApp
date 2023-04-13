import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }} >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation