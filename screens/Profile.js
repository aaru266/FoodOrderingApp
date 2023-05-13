import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Alert } from 'react-native'

const Profile = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            Alert.alert('Sign Out Scuuessfully')
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={handleSignOut} >
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})