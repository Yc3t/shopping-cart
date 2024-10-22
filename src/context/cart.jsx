import { createContext, useState } from "react";

//create context
export const cartContext = createContext()

//create provider
export function CartProvider ({children}){
    const [cart,setCart] = useState([])

    const addToCart = product => {
        //check if product is already on cart
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0 ){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity +=1
            setCart(newCart)
        }

    setCart(prevState => ([

    ])
        
    )

    }

    const clearCart = () =>{
        setCart([])
    }

}