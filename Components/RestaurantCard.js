import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RES_IMG_CDN } from '../App';

const RestaurantCard = ({ restaurantData }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString } = restaurantData.data;
    return (
        <View style={styles.container} >
            <View>
                <Image source={`${RES_IMG_CDN}${cloudinaryImageId}`} />
            </View>
            <Text>{name}</Text>
            <Text>{cuisines.join(", ")}</Text>
            <Text>{avgRating}</Text>
            <Text>{slaString}</Text>
            <Text>{costForTwoString}</Text>

        </View>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "gray"
    }
})