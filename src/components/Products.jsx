import './Products.css'
import { CopyX, ShoppingBag } from "lucide-react"
import { useCart } from '../hooks/UseCart'
import { useCheckProduct } from '../hooks/useCheckProduct'

export function Products({ products }) {

  const { cart, addToCart, removeFromCart } = useCart()
  console.log(cart)




  return (
    <main className="products">
      <ul>
        {products.slice(0, 15).map(product => {
          const itsInside = useCheckProduct(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <span className="price">{product.price} €</span>
              <button onClick={() => {
                itsInside ?  removeFromCart(product) : addToCart(product)
              }
              }>
                {
                  itsInside
                    ?
                    <>
                      <CopyX size={14} /> Remove from Cart
                    </>
                    :
                    <>
                      <ShoppingBag size={14} /> Add to Cart
                    </>
                }
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
