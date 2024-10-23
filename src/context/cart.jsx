import { createContext, useState } from "react";

//create context
export const CartContext = createContext()

//create provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])


  const addToCart = (product) => {
    //check if product is already on cart

    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    //product not in cart
    setCart(prevState => ([
      ...prevState,{...product,quantity:1}
    ]))


  } 


  const clearCart = () => {
  
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    >
      { children }

    </CartContext.Provider>




  )

}
