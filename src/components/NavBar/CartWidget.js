import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget =  () => {
    
    const {calculateQuantity} = useContext(CartContext)
    
    return (
        <div>
            <img src= "../ShopIcon.png" alt="ShopIcon"/>
            <span> {calculateQuantity()}</span>
        </div>
    )
}