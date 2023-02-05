import React from 'react'
import './cart.scss'
import { useSelector } from 'react-redux'
import ItemCart from './ItemCart/ItemCart.jsx'

const Cart = () => {
    const items = useSelector((state) => state.cart.itemsInCart)
    const price = items.reduce(
        (accumulator, product) => (accumulator += product.cost * product.count),
        0
    )

    return (
        <div className="cart-content">
            <div className="container">
                <h1>Корзина</h1>
                <div className="cards">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <ItemCart {...item} key={item.id} />
                        ))
                    ) : (
                        <div className="nobody">Пока ничего нет</div>
                    )}
                </div>
                <div className="checkout">Оплатить</div>
            </div>
        </div>
    )
}

export default Cart
