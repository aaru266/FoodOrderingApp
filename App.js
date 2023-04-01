import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, Pressable } from 'react-native';
import chefImg from './assets/chef.jpg'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={chefImg} style={{ width: 400, height: 500 }} />
      <View style={{ padding: 20 }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: "center" }}>The Fastest in Delivery <Text style={{ color: "orange" }}>Food</Text></Text>

      </View>
      <View>
        <Text style={{ marginTop: 15, fontSize: 20, color: "rgba(0,189,0,0.9)" }}>Giving your Hunger a new Option</Text>
      </View>
      <Pressable title='Get Started' style={styles.button}  >
        <Text style={{ fontSize: 17, fontWeight: 400 }}> Get Started</Text>
      </Pressable>
      <Text>Updated by Aryan Nama</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: "tomato",
    borderRadius: 50,
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 40,


  }

});
