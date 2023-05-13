import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Alert } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useDispatch } from 'react-redux';
import { setUser } from '../app/features/UserSlice';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password).then(userCred => {
            const user = userCred.user
            dispatch(setUser(user))
            console.log(user)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }

    WebBrowser.maybeCompleteAuthSession();


    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '941304859403-uqpigf55pa4rkdchrkn8lod86aaspt4s.apps.googleusercontent.com',
        androidClientId: "941304859403-89ar2vck38gr3tgc2boushifm88rhl2e.apps.googleusercontent.com",
    });
    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
            console.log(userInfo);
        }
    }, [response, token, dispatch]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            // console.log(user)
            dispatch(setUser(user))
        } catch (error) {
            alert(error.message)
        }
    };


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

            <View style={styles.loginIcon}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    promptAsync();
                }} >
                    <Image source={require('../assets/google.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                </TouchableOpacity>
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
    loginIcon: {
        marginVertical: 10
    }
})