import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../app/features/UserSlice'
import { AllRestaurantsSlice } from "./features/RestaurantSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        restaurants: AllRestaurantsSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})