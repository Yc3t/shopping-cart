import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react';
import { Header } from './components/Header.jsx';
import {useFilters} from './hooks/UseFilters.js'
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {
  
  const {filterProducts} = useFilters()


  const filteredProducts = filterProducts(initialProducts)
 
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
