import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:30,fontWeight:500,marginVertical:20}}>Login</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
      <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:20,color:'white'}}>
                    Login
                </Text>
            </TouchableOpacity>
            <View style={styles.signupLink}>
                <Text style={{fontSize:18,fontWeight:500}}>
                    New User?
                </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={{fontSize:18,color:'blue'}}>Create Account</Text>
                </TouchableOpacity>
            </View>
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
        borderRadius:5,
        padding:10,
        marginVertical:10,
        borderColor:'rgba(0,0,0,0.8)',

    },
    button:{
    //    borderWidth:2,
       paddingHorizontal:20,
       paddingVertical:10,
       borderRadius:10,
       backgroundColor:'black',
       marginTop:20
    },
    signupLink:{
        flexDirection:'row',
        marginVertical:15,
        gap:5,
    }
})