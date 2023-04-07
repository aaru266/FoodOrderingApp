import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 500, marginVertical: 20 }} >Sign Up</Text>
            <TextInput style={styles.input} placeholder='Name' />
            <TextInput style={styles.input} placeholder='Email' inputMode='email' />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
            <TouchableOpacity>
                <Text>
                    Sign Up
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6'
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)',
        padding: 10,
        width: 250,
        marginVertical: 5,
        borderRadius: 5,
    }
})