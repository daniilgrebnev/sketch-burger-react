import React, { useState } from 'react'
import './item.scss'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../../redux/cart/reducer.js'
import ItemCard from "../ItemCard/ItemCard";

const Item = (burger) => {
    let [counter, setCounter] = useState(1)
    let [active, setActive] = useState(false)

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
    const style = {
        background: burger.background
    }

    return (
        <div className="burger-item" onClick={() => setActive(!active
        )}>

                <div className="img" style={style}>
                    <img src={burger.img} alt=""/>
                </div>

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
            {/*<div className={active ? 'item-card-popup active' : 'item-card-popup'}>*/}
            {/*    <h1 onClick={() => setActive(active = false)}>X</h1>*/}
            {/*    <ItemCard {...burger} key={burger.id} />*/}
            {/*</div>*/}
        </div>
    )
}

export default Item
