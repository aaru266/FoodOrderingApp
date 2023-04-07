import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:30,fontWeight:500,marginVertical:20}}>Login</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor:'linen',
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    input:{
        borderWidth:1,
        width:250,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        borderColor:'rgba(0,0,0,0.5)',

    }
})