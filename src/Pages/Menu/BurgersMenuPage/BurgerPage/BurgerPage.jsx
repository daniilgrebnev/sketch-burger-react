import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, getDoc, collection } from 'firebase/firestore'
import { db } from '../../../../firebase/firebase.js'
import burger from '../../../../assets/logo.svg'
import './burger-page.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart, removeItemInCart } from '../../../../redux/cart/reducer'

const BurgerPage = () => {
    const { BurgerId } = useParams()
    let [burgers, setBurgers] = useState([])
    let [counter, setCounter] = useState(1)

    useEffect(() => {
        const q = collection(db, 'burgers')
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let burgersArray = []
            querySnapshot.forEach((doc) => {
                burgersArray.push({ ...doc.data(), id: doc.id })
                const currentItem = burgersArray.find((x) => x.id === BurgerId)
                setBurgers(currentItem)
            })
        })
        return () => unsubscribe
    }, [])
    const minusFunc = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    let sum = counter * burgers.cost

    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.itemsInCart)

    const isItemInCart = items.some((item) => item.id === burgers.id)

    const handleClick = () => {
        if (isItemInCart) {
            dispatch(removeItemInCart(burgers.id))
        } else {
            dispatch(setItemInCart(burgers))
        }
    }
    return (
        <div className="burger-page">
            <div className="container">
                <div className="slider">
                    <img src={burger} alt="" />
                </div>
                <div className="content">
                    <h2>{burgers.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum eius eos error eveniet harum, illum
                        incidunt mollitia nihil praesentium, quaerat rem unde
                        velit! Consequatur corporis ipsam qui quis tempora?
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum eius eos error eveniet harum, illum
                        incidunt mollitia nihil praesentium, quaerat rem unde
                        velit! Consequatur corporis ipsam qui quis tempora?
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum eius eos error eveniet harum, illum
                        incidunt mollitia nihil praesentium, quaerat rem unde
                        velit! Consequatur corporis ipsam qui quis tempora?
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum eius eos error eveniet harum, illum
                        incidunt mollitia nihil praesentium, quaerat rem unde
                        velit! Consequatur corporis ipsam qui quis tempora?
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum eius eos error eveniet harum, illum
                        incidunt mollitia nihil praesentium, quaerat rem unde
                        velit! Consequatur corporis ipsam qui quis tempora?Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam cum eius eos error eveniet harum, illum incidunt
                        mollitia nihil praesentium, quaerat rem unde velit!
                    </p>
                    <div className="count-with-button">
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
                            <span className="toCart" onClick={handleClick}>
                                В корзину
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerPage
