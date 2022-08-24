import {React, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import Title from './Title'

export default function ProductDetail() {

    let params = useParams()
    let [productDetail, setProductDetail] = useState(null)

    useEffect(()=>{
      
      fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
          .then(response => response.json())
          .then(data => {
              let productInfo = data.find((element)=>{
                return element.id === parseInt(params.id)
              })
              setProductDetail(productInfo)
          })
      
             
  },[])

    return (
      <div>
          { productDetail && 
            <div>
              <Title mainTitle={"Product Detail of " + productDetail.name}/>
              <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} alt={productDetail.name} width="400px"/>
              <p>Name: {productDetail.name}</p>
              <p>Price: {productDetail.price}</p>
              <p>Description: {productDetail.description}</p>
              <QuantityBtn productInfo={productDetail}/>
                         
            </div>
          }
          <Link to='/'>Home</Link>     
      </div>

    )
}
