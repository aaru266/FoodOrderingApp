import { createSlice } from "@reduxjs/toolkit";
import { AsyncStorage } from 'react-native'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isAuthenticated: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
