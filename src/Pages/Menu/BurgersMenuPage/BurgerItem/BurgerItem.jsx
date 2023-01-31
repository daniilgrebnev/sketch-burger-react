import React, { useState } from 'react'
import './BurgerItem.scss'
import burgers from '../../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../../../redux/cart/reducer.js'

const BurgerItem = (burger) => {
    let [counter, setCounter] = useState(1)

    let sum = counter * burger.cost

    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.itemsInCart)
    const handleClick = () => {
        dispatch(setItemInCart(burger))
    }
    const minusFunc = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="burger-item">
            <Link to={burger.id}>
                <div className="img">
                    <img src={burgers} alt="" />
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

export default BurgerItem
