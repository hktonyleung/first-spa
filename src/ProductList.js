import React from 'react'
import styles from './ProductList.module.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let [productList, setProductList] = useState([])

    useEffect(()=>{
      
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => {
                setProductList(data)
            })
        console.log(productList)              
    },[])

  return (
        <>
            <Title mainTitle="React入門水果店" />
            
            <div className="container">
                {
                    productList.map(product=>(
                        <React.Fragment key={product.id}>

                            <div className="containerItem">
                                <Link to={'/product/'+product.id}>
                                    <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name} />
                                </Link>

                                <div className="productName">
                                    {product.name}  -  {product.price}元/件
                                </div>
                
                                <QuantityBtn productInfo={product} />
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </>

  )
}
