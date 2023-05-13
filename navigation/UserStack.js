import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const UserStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Navigation" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Navigation" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default UserStack

const styles = StyleSheet.create({})