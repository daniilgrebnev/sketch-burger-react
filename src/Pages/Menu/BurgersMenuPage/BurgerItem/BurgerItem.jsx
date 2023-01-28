import React, { useState } from 'react'
import './BurgerItem.scss'
import burgers from '../../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import BurgerPage from '../BurgerPage/BurgerPage.jsx'

const BurgerItem = (burger) => {
    let [counter, setCounter] = useState(1)

    let sum = counter * burger.cost

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
                <div className="counter">
                    <div className="minus" onClick={minusFunc}>
                        -
                    </div>
                    <div className="count">{counter}</div>
                    <div
                        className="plus"
                        onClick={() => setCounter(counter + 1)}
                    >
                        +
                    </div>
                </div>
                <button>
                    <span className="cost">
                        <span>{sum}</span> руб.
                    </span>
                    <span className="add">В корзину</span>
                </button>
            </div>
        </div>
    )
}

export default BurgerItem
