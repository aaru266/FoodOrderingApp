import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth, provider } from '../firebase';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../app/features/UserSlice';
import { GoogleSignin, GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleLogin = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('signed in!');
            })
            .catch(error => {

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    GoogleSignin.configure({
        webClientId: '824077864903-k887t214a0ssr8vs2ql5fkiiaeu7oeat.apps.googleusercontent.com',
    });

    const onGoogleButtonPress = async () => {
        // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        const user = auth().signInWithCredential(googleCredential);
        user.then(res => {
            console.log("hello")
            dispatch(setUser(user))
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }



    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 500, marginVertical: 20 }}>Login</Text>
            <TextInput style={styles.input} placeholder='Email' onChangeText={(text) => setEmail(text)} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={{ marginTop: 20 }}>
                <GoogleSigninButton onPress={() => onGoogleButtonPress()} style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                />

            </View>


            <View style={styles.signupLink}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    New User?
                </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ fontSize: 18, color: 'blue' }}>Create Account</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'linen',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        width: 250,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        borderColor: 'rgba(0,0,0,0.8)',

    },
    button: {
        //    borderWidth:2,
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
    },
})