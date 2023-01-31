import React from 'react'
import logo from '../../../assets/logo.svg'
import '../cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
    minusCounter,
    removeItemInCart,
    setItemInCart,
} from '../../../redux/cart/reducer.js'

const ItemCart = (item) => {
    const dispatch = useDispatch()

    const { count } = useSelector((state) =>
        state.cart.itemsInCart.find((obj) => obj.id === item.id)
    )
    const handleClick = (id) => {
        dispatch(removeItemInCart(id))
    }
    const plusCounter = () => {
        dispatch(setItemInCart(item))
    }
    const minusCount = (id) => {
        if (count === 1) {
            dispatch(removeItemInCart(id))
        } else {
            dispatch(minusCounter(item))
        }
    }

    return (
        <div className="cart-product-card" key={item.id}>
            <div className="img">
                <img src={logo} alt="" />
            </div>

            <div className="counter">
                <div className="minus" onClick={() => minusCount(item.id)}>
                    -
                </div>
                <span>{count} шт.</span>
                <div className="plus" onClick={() => plusCounter()}>
                    +
                </div>
            </div>

            <div className="title">{item.title}</div>
            <div className="cost">
                <span>{item.cost * count}</span> руб.
            </div>
            <div onClick={() => handleClick(item.id)} className="remove">
                -
            </div>
        </div>
    )
}

export default ItemCart
