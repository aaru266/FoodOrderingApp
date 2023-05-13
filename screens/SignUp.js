import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useDispatch } from 'react-redux'
import { setUser } from '../app/features/UserSlice'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser(user))
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    WebBrowser.maybeCompleteAuthSession();


    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '508590517991-3t0sen59fsiu6mj5cj32kq5c80k4oc0g.apps.googleusercontent.com',
        androidClientId: "508590517991-pfn0350lu5b4jlashjdlqsqhp7dpbgv2.apps.googleusercontent.com",

    });
    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            alert(error.message)
        }
    };

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