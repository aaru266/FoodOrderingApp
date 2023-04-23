import{ StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'
const data=[
    [{uri:require('../assets/categories/northindian.jpg')},{uri:require('../assets/categories/pizza.jpg')}],
    [{uri:require('../assets/categories/burger.jpg')},{uri:require('../assets/categories/biryani.jpg')}],
    [{uri:require('../assets/categories/cholebhature.jpg')},{uri:require('../assets/categories/chinese.jpg')}],
    [{uri:require('../assets/categories/icecream.jpg')},{uri:require('../assets/categories/shake.jpg')}],
    [{uri:require('../assets/categories/cakes.jpg')},{uri:require('../assets/categories/rasmalai.jpg')}],
    [{uri:require('../assets/categories/kebabs.jpg')},{uri:require('../assets/categories/roll.jpg')}],
    [{uri:require('../assets/categories/southindian.jpg')},{uri:require('../assets/categories/vegfood.jpg')}],
    [{uri:require('../assets/categories/lassi.jpg')},{uri:require('../assets/categories/khichdi.jpg')}],
]

const renderRow=(item)=>{
    return(
        <View style={{ margin:15}}>
        <View style={{
            backgroundColor: 'white',
            width: 50,
            height: 100,
            marginBottom:5,
            marginEnd:10
    
        }}>
            <Image source={item[0].uri} style={{resizeMode:'cover',width:80,height:80,borderRadius:40}}/>

        </View>
        {item.length > 1 ?
            <View
                style={{
                    backgroundColor: 'white',
                    width: 50,
                    height: 100,
                    marginBottom:1
                }}>
                 <Image source={item[1].uri} style={{resizeMode:'cover',width:80,height:80,borderRadius:40}}/>
            </View> : null}
    </View>
    );
}

const Categories = () => {
  return (
    <View >
        <FlatList 
        data={data}
        horizontal={true}
        renderItem={({item,index})=>renderRow(item)}
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

})