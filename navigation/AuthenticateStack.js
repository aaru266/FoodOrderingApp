import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const AuthenticateStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthenticateStack

const styles = StyleSheet.create({})