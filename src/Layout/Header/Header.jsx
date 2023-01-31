import React, { useState } from 'react'
import './header.scss'
import Logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Header = () => {
    let [active, setActive] = useState(false)
    const items = useSelector((state) => state.cart.itemsInCart)
    const price = items.reduce(
        (accumulator, product) => (accumulator += product.cost * product.count),
        0
    )
    const count = items.length
    console.log(items)

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <b>Sketch Burger</b>
                </div>
                <div className="navigate">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/menu">Меню</NavLink>
                    <NavLink to="/about">О проекте</NavLink>
                </div>
                <Link to="cart">
                    <div className="cart">
                        <p>{price} ₽</p>
                        <img src={cart} alt="" />
                        <div className="circle">{count}</div>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
