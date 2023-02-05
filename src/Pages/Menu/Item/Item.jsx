import React, { useState } from 'react'
import './item.scss'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../../redux/cart/reducer.js'

const Item = (burger) => {
    let [active, setActive] = useState(false)
    let [infoHover, setInfoHover] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setItemInCart(burger))
    }

    const style = {
        background: burger.background,
    }
    const infoHoverHandler = () => {
        setInfoHover(!infoHover)
    }
    const borderStyle = {
        border: `2px solid ${burger.background}`,
        color: burger.background,
    }

    return (
        <div className="burger-item" onClick={() => setActive(!active)}>
            <Link to={burger.id}>
                <div className="img" style={style}>
                    <img src={burger.img} alt="" />
                </div>
            </Link>

            <div className="content">
                <p>{burger.title}</p>
                <div
                    className="information"
                    style={borderStyle}
                    onMouseLeave={infoHoverHandler}
                    onMouseEnter={infoHoverHandler}
                >
                    i
                </div>
                <div className={infoHover ? 'info-text active' : 'info-text'}>
                    Твистер оригинальный — аппетитная и сочная еда в удобном
                    формате. Можно есть на ходу, не боясь испачкаться. Главный
                    ингредиент в составе Твистера оригинального — отборные
                    куриные стрипсы в оригинальной панировке, приготовленные по
                    секретному рецепту с добавлением 11 трав и специй,
                    обжаренные до маняще хрустящей корочки. Стрипсы отлично
                    сочетаются с сочными свежими овощами и фирменным соусом,
                    закрученными в аппетитную пшеничную лепешку. Скорее
                    попробуйте! Состав: Тортилья пшеничная; Томаты свежие; Салат
                    Айсберг; Соус Майонезный; Стрипсы OR. На 100 граммов: К 232,
                    Б 13, Ж 9, У 25
                </div>

                <button>
                    <span className="cost">
                        <span>{burger.cost}</span> руб.
                    </span>
                    <span className="add" onClick={handleClick}>
                        В корзину
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Item
