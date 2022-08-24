import React, { useContext } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'

export default function Checkout() {

    let {cartItems} = useContext(CartContext)
 

  let cartEmpty = cartItems.length<=0?true:false
  let grandTotal = cartItems.reduce((total, product)=>{
        return total +=product.price*product.quantity
  },0)
  const freeShippingPrice = 99

  return (
    <div>
        <Title mainTitle="Your Shopping Cart"/>
        {
            cartEmpty && 
            <div>
                No Shopping Item<br/>
                <Link to="/">Go to details page</Link>
            </div>

        }


        {   !cartEmpty && 
            <div> Cart List
                <div id="cartSection">
                    {
                        cartItems.map((product)=>(
                            <div key={product.id}>
                                <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}/>
                                {product.name}
                                {product.description}
                                {product.price}
                                Quantity: {product.quantity}
                                <QuantityBtn productInfo={product}/>
                            </div>
                        ))                        
                    }

                </div>

                <div id="checkoutSection">
                    Total Price is: {grandTotal}

                    {
                        grandTotal >= freeShippingPrice?
                        <div>Free Shipping</div>
                        :
                        <div>Free Shipping over {freeShippingPrice}<br/>Remain {freeShippingPrice - grandTotal}</div>
                    }

                </div>

            </div>
        }   
    </div>
  )
}
