import React, { useState } from 'react'
import './item.scss'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../../redux/cart/reducer.js'

const Item = (burger) => {
    let [active, setActive] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setItemInCart(burger))
    }

    const style = {
        background: burger.background,
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
