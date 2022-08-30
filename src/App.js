import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import { CartContext } from './CartContext';
import React, { useState } from 'react';
import Form from './Form';
import DynamicComponent from './DynamicComponent'
import MUI from './MUI'
import Survey from './Survey'

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Link to='/'>Home</Link>   
        <Link to='/checkout'>Shopping Cart</Link>
        <Link to='/form'>Form</Link>
        <Link to='/dynamic'>Dynamic Component</Link>
        <Link to='/mui'>MUI</Link>
        <Link to='/survey'>Survey</Link>

        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/product' element={<ProductDetail/>}>
              <Route path=':id' element={<ProductDetail/>}/>
          </Route>
          <Route path='/form' element={<Form/>}>
          </Route>          
          <Route path='/dynamic' element={<DynamicComponent/>}>
          </Route>
          <Route path='/mui' element={<MUI/>} />
          
          <Route path='/survey' element={<Survey/>} />

          <Route path='/*' element={<p>404 Not Found</p>} />
        </Routes>        
      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
