import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart/reducer'

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    },
})
