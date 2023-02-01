import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        // setItemInCart: (state, action) => {
        //     state.itemsInCart.push(action.payload)
        // },
        setItemInCart: (state, action) => {
            const findItem = state.itemsInCart.find(
                (obj) => obj.id === action.payload.id
            )

            if (findItem) {
                findItem.count++
            } else {
                state.itemsInCart.push({
                    ...action.payload,
                    count: 1,
                })
            }
        },
        minusCounter: (state, action) => {
            const findItem = state.itemsInCart.find(
                (obj) => obj.id === action.payload.id
            )

            if (findItem) {
                findItem.count--
            } else {
                state.itemsInCart.push({
                    ...action.payload,
                    count: 1,
                })
            }
        },
        removeItemInCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(
                (item) => item.id !== action.payload
            )
        },
    },
})
export const { setItemInCart, removeItemInCart, minusCounter } =
    cartSlice.actions
export default cartSlice.reducer
