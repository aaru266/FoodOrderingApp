import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth';


const Profile = () => {
    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
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