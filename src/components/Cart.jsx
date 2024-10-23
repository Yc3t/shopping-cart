import { Car, ShoppingBag, Trash2Icon } from 'lucide-react'
import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/UseCart'



function CartItem({thumbnail,price,title,quantity,addToCart}){
  return(
  <li>
      <img
        src ={thumbnail}
        alt={title}
      />
      
      <div className='prod'>
        <strong>{title}</strong> - ${price}
      </div>

      <footer className='quant'>
        <small>
          Qty: {quantity}
        </small>

        <button onClick={addToCart}>+</button>

      </footer>

  </li>
  )

}










export function Cart() {
    const cartCheckboxId = useId()
    const {cart,clearCart, addToCart} = useCart()

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <ShoppingBag size={18}/>
        </label>

        <input id={cartCheckboxId} type='checkbox' hidden/>
        <aside className='cart'>
            <ul> 
          {cart.map(product =>(
          <CartItem
              key = {product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />

          ))}

           </ul>
            <button onClick = {clearCart} className="clear-cart-button">
                <Trash2Icon size={16}/>
                Clear Cart
            </button>
        </aside>
        </>
    )
}
