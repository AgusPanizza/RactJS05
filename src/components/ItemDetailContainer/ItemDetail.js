import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {
    
    const {goBack, push} = useHistory ()

    const {addToCart, isInCart} = useContext (CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAgregar = () => {
        const newItem ={
            id,
            name,
            price,
            category,
            quantity,
    }

    if (quantity >0) {    
        addToCart(newItem)
    }
    }

    return (
        <div className= "container detail">
            <br/><h2>{name}</h2> 
            <h3>{description}</h3>
            <br/><h4>Precio: ${price}</h4>
            <img src= {img} height= "500px" alt={name}/>
            <br/><br/>    

            {isInCart(id)
            ? <Link to = "/cart" className="btn btn-success"> Finalizar Compra </Link>
            :
             <>
            <ItemCount quantity = {quantity} modifyQuantity ={setQuantity} max={stock}/>
            <br/>
            <button className="btn btn-dark my-2" onClick= {handleAgregar}>
            Agregar a Carrito
            </button>
             </>
            }
            <br/>
            <hr/>
            <button className= "btn btn-secondary"
                onClick={() => goBack ()}>
            Volver
            </button>
            <br/>
            <hr/>
            <button onClick = {() => push("/")}>
            Volver a Home
            </button>
        </div>
    )
}
