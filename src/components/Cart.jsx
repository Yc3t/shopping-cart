import { ShoppingBag, Trash2Icon } from 'lucide-react'
import './Cart.css'
import { useId } from 'react'

export function Cart() {
    const cartCheckboxId = useId()

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <ShoppingBag size={18}/>
        </label>

        <input id={cartCheckboxId} type='checkbox' hidden/>
        <aside className='cart'>
            <ul> 
                <li>
                    <img
                    src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
                    alt='test'
                    />
                    <div className="cart-item-details">
                        <strong>test</strong>
                        <span>$141</span>
                        <footer>
                            <small>Qty: 1</small>
                            <button>+</button>
                        </footer>
                    </div>
                </li>
            </ul>
            <button className="clear-cart-button">
                <Trash2Icon size={16}/>
                Clear Cart
            </button>
        </aside>
        </>
    )
}
