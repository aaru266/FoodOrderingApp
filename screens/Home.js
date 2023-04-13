import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Slider from '../Components/Slider';


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: 220, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 30, fontWeight: 700 }}>Find your Favourite food</Text>
                </View>
                <View>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 50, paddingRight: 50 }} placeholder='Search' />
                <Ionicons name='search' size={24} style={{ position: "absolute", right: 15, top: 12, }} />
            </View>
            <Slider/>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor:'white',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
    },
    searchContainer: {
        marginVertical: 20,
    }
})