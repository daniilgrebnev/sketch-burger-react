import React from 'react'
import './header.scss'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
                <div className="contact">Telegram</div>
            </div>
        </header>
    )
}

export default Header
