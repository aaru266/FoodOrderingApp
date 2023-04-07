import React from 'react'
import { StyleSheet, Text, Image, View, Pressable, Platform, TouchableOpacity } from 'react-native';
import chefImg from '../assets/chef.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';
const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={chefImg} style={{ width: 400, height: 450 }} />
            <View style={{ padding: 20 }}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: "center" }}>The Fastest in Delivery <Text style={{ color: "orange" }}>Food</Text></Text>

            </View>
            <View>
                <Text style={{ marginTop: 15, fontSize: 20, color: "rgba(0,189,0,0.9)" }}>Giving your Hunger a new Option</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.btntext}>Get started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    button: {
        backgroundColor: "tomato",
        borderRadius: 50,
        marginTop: 20,
        padding: 20,
        paddingHorizontal: 50,
    },
    btntext: {
        color: "#fff",
        fontWeight: 500,
        fontSize: 20
    }
})