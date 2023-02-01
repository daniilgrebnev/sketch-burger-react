import React, { useEffect, useState } from 'react'
import './drink-menu-page.scss'
import { db } from '../../../firebase/firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
import Item from '../Item/Item'
import roll from '../../../assets/rolly.svg'
import burgers from '../../../assets/logo.svg'
import drinks from '../../../assets/MenuMain/drinks.svg'

const DrinksMenuPage = () => {
    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        const q = collection(db, 'drinks')
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
                <h1>Напитки</h1>
                <div className="burgers">
                    {burgers.length <= 0 ? (
                        <div className="roll">
                            <img src={roll} alt="" />
                        </div>
                    ) : (
                        burgers.map((burger) => (
                            <Item key={burger.id} {...burger} background='#e3e359'/>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default DrinksMenuPage
