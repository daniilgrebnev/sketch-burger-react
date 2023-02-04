import React from 'react'
import './item-card.scss'
import { useParams } from 'react-router-dom'

const ItemCard = () => {
    console.log(useParams())
    const { id } = useParams()
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default ItemCard
