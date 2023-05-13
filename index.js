import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AuthenticateStack from './navigation/AuthenticateStack'
import UserStack from './navigation/UserStack'
const index = () => {
    const { isAuthenticated } = useSelector(state => state.user)

    if (isAuthenticated === false) return <AuthenticateStack />

    return <UserStack />
}

export default index

const styles = StyleSheet.create({})