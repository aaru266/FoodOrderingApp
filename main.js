import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthenticateStack from './navigation/AuthenticateStack'
import UserStack from './navigation/UserStack'
import auth from '@react-native-firebase/auth';
import { setUser } from './app/features/UserSlice'
const main = () => {

    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        console.log(user)
        setUser(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (!user) return <AuthenticateStack />

    return <UserStack />
}

export default main

const styles = StyleSheet.create({})