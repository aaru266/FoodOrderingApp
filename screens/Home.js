import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <View style={{width:250,justifyContent:'flex-start',alignItems:'flex-start'}}>
            <Text style={{fontSize:30,fontWeight:600}}>Find your favourite food</Text>
            </View>
            <View>
             <Text >aaa</Text>
            </View>
            </View>
            <View style={styles.searchcontainer}>
                <TextInput style={{borderWidth:1,padding:10,borderRadius:50}} placeholder='Search'/>
                
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:10
    },
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
    searchcontainer:{
         marginVertical:20
    }
})