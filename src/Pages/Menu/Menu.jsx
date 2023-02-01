import React, { useState } from 'react'
import './menu.scss'
import burger from '../../assets/logo.svg'
import drinks from '../../assets/MenuMain/drinks.svg'
import sale from '../../assets/MenuMain/sale.svg'
import dessert from '../../assets/MenuMain/dessert.svg'
import sauce from '../../assets/MenuMain/souce.svg'
import snacks from '../../assets/MenuMain/snacks.svg'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'Напитки',
            img: drinks,
            link: 'drinks',
        },
        {
            id: 2,
            title: 'Бургеры',
            img: burger,
            link: 'burger',
        },
        {
            id: 3,
            title: 'Закуски',
            img: snacks,
            link: 'burger',
        },
        {
            id: 4,
            title: 'Соусы',
            img: sauce,
            link: 'sauce',
        },
        {
            id: 5,
            title: 'Десерты',
            img: dessert,
            link: 'burger',
        },
        {
            id: 6,
            title: 'Акции',
            img: sale,
            link: 'burger',
        },
    ])
    return (
        <div className="menu">
            <h1>Наше меню</h1>
            <div className="container">
                <div className="categories">
                    {categories.map((category) => (
                        <Link to={category.link}>
                            <div className="category" key={category.id}>
                                <div className="category-img">
                                    <img src={category.img} alt="" />
                                </div>
                                <div className="category-title">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
