import './Products.css'
import { ShoppingBag } from "lucide-react"

export function Products ({products}){
  return(
    <main className="products">
      <ul>
        {products.slice(0,15).map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <span className="price">{product.price} €</span>
            <button>
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
