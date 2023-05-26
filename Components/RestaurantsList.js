import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurants } from '../app/features/RestaurantSlice'
import RestaurantCard from './RestaurantCard'

const RestaurantsList = () => {
    const dispatch = useDispatch()
    const { restaurants, error } = useSelector(state => state.restaurants)

    useEffect(() => {
        dispatch(getAllRestaurants())
    }, [])
    return (
        <View style={{ marginTop: 20 }}>
            {
                restaurants.map((restaurant) => (
                    <RestaurantCard restaurantData={restaurant} key={restaurant.data.id} />
                ))
            }
        </View>
    )
}

export default RestaurantsList

const styles = StyleSheet.create({})