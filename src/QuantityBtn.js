import React, { useContext } from 'react'
import {useState, } from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext)

    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    let [numInCart, setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{
        if (productIndexInCart === -1) {
            setCartItems([{
                id: productInfo.id,
                name: productInfo.name,
                image: productInfo.image,
                price: productInfo.price,
                description: productInfo.description,
                quantity: 1
        },...cartItems]
        )
        } else {
            let newCartArray = [...cartItems ]
            newCartArray[productIndexInCart].quantity +=1
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }
    const handleSubstract = () => {
        if (cartItems[productIndexInCart].quantity === 1){
            //Remove
            let newCartArray = [...cartItems ]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)  

        } else {
            let newCartArray = [...cartItems ]
            newCartArray[productIndexInCart].quantity -=1
            setCartItems(newCartArray)            
        }


        setNumInCart(numInCart - 1)
    }

  return (
    <div>

        {
            numInCart===0?
            <div onClick={handleAdd}>Add to Cart</div>
            :
            <div>
                <span onClick={handleSubstract}>-</span>
                {numInCart} item
                <span onClick={handleAdd}>+</span>
            </div>            
        }
    </div>
  )
}
