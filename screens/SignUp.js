import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../app/features/UserSlice'
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error.message);
            });
    }



    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 500, marginVertical: 20 }} >Sign Up</Text>
            <TextInput style={styles.input} placeholder='Name' />
            <TextInput style={styles.input} placeholder='Email' inputMode='email' onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress={handleSignUp} >
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <View style={styles.signupLink}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Already Registered?
                </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 18, color: 'blue' }}>Login here</Text>
                </TouchableOpacity>
            </View>

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
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: 'black',
        marginTop: 20
    },
    signupLink: {
        flexDirection: 'row',
        marginVertical: 15,
        gap: 5,
    }
})