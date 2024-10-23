import { useCart } from "./UseCart"

export function useCheckProduct(product){
  const {cart} = useCart()
  const itsInside =  cart.some(item => item.id===product.id)

  return itsInside


} 
