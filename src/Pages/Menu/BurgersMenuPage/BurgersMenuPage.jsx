import React, { useEffect, useState } from 'react'
import './burger-menu-page.scss'
import { db } from '../../../firebase/firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
import BurgerItem from './BurgerItem/BurgerItem.jsx'
import roll from '../../../assets/rolly.svg'

const BurgersMenuPage = () => {
    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        const q = collection(db, 'burgers')
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let burgersArray = []
            querySnapshot.forEach((doc) => {
                burgersArray.push({ ...doc.data(), id: doc.id })
                setBurgers(burgersArray)
            })
        })
        return () => unsubscribe
    }, [])

    return (
        <div className="burger-menu-page">
            <div className="container">
                <h1>Бургеры</h1>
                <div className="burgers">
                    {burgers.length <= 0 ? (
                        <div className="roll">
                            <img src={roll} alt="" />
                        </div>
                    ) : (
                        burgers.map((burger) => (
                            <BurgerItem key={burger.id} {...burger} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default BurgersMenuPage
