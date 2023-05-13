import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
const data = [
    [{ uri: require('../assets/categories/northindian.jpg'), name: "North Indian" }, { uri: require('../assets/categories/pizza.jpg'), name: "Pizza" }],
    [{ uri: require('../assets/categories/burger.jpg'), name: "Burger" }, { uri: require('../assets/categories/biryani.jpg'), name: "Biryani" }],
    [{ uri: require('../assets/categories/cholebhature.jpg'), name: "Chole Bhature" }, { uri: require('../assets/categories/chinese.jpg'), name: "Chinese" }],
    [{ uri: require('../assets/categories/icecream.jpg'), name: "Ice Cream" }, { uri: require('../assets/categories/shake.jpg'), name: "Shake" }],
    [{ uri: require('../assets/categories/cakes.jpg'), name: "Cakes" }, { uri: require('../assets/categories/rasmalai.jpg'), name: "Rasmalai" }],
    [{ uri: require('../assets/categories/kebabs.jpg'), name: "Kebabs" }, { uri: require('../assets/categories/roll.jpg'), name: "Roll" }],
    [{ uri: require('../assets/categories/southindian.jpg'), name: "South Indian" }, { uri: require('../assets/categories/vegfood.jpg'), name: "Veg Food" }],
    [{ uri: require('../assets/categories/lassi.jpg'), name: "Lassi" }, { uri: require('../assets/categories/khichdi.jpg'), name: "Khichdi" }],
]

const renderRow = (item) => {
    return (
        <View style={styles.categoryContainer}>
            <View >
                <Image source={item[0].uri} style={styles.image} />
                <Text style={styles.text}>{item[0].name}</Text>

            </View>
            {item.length > 1 ?
                <View>
                    <Image source={item[1].uri} style={styles.image} />
                    <Text style={styles.text} >{item[1].name}</Text>

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
                renderItem={({ item, index }) => renderRow(item)}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        gap: 20
    },
    image: {
        resizeMode: 'cover',
        width: 80,
        height: 80,
        borderRadius: 40
    },
    text: {
        textAlign: 'center'
    }
})