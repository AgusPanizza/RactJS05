import React from 'react'

export const ItemCount = ({quantity, modifyQuantity, max}) => {

    const handleRestar = () =>{
    if (quantity > 0){
    modifyQuantity (quantity - 1)
    }
    }

    const handleSumar = () =>{
    if (quantity < max){
    modifyQuantity (quantity + 1)
    }
    }


    return (
        <div>
            <button
            onClick ={handleRestar}
            className =  "btn btn-secondary mx-3">
                -
            </button>

            <span className="mx-3">{quantity}</span>

            <button
            onClick ={handleSumar}
            className =  "btn btn-secondary mx-3">
                +
            </button>
        </div>
    )
}
