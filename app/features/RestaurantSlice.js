import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllRestaurants = createAsyncThunk('restaurants/all', async () => {
    try {
        const res = await axios.get('https://instafood.onrender.com/api/restaurants?lat=26.922070&lng=75.778885');
        const res_data = await res.data

        return await res_data.data.cards[2].data.data.cards
    } catch (error) {
        throw error.response.data.error
    }
})

export const AllRestaurantsSlice = createSlice({
    name: "allrestaurants",
    initialState: {
        loading: false,
        restaurants: [],
        error: null
    },
    extraReducers: {
        [getAllRestaurants.pending]: (state) => {
            state.loading = true
        },
        [getAllRestaurants.fulfilled]: (state, action) => {
            state.loading = false
            state.restaurants = action.payload
        },
        [getAllRestaurants.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
    }
})

