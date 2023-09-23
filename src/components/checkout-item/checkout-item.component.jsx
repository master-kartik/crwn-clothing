import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem})=>{
    const {name, id, price, quantity, imageUrl} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext)
    const clearHandler=()=>{
        clearItemFromCart(cartItem)
    }
    const addHandler=()=>{
        addItemToCart(cartItem)
    }
    const removeHandler=()=>{
        removeItemToCart(cartItem)
    }
   
           return( 
           <div key={id} className='checkout-item-container'>
                <div className="image-container">
                    <img src={imageUrl} />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={removeHandler}>&#10094;</div>
                    {quantity}
                    <div className="arrow" onClick={addHandler}>&#10095;</div>
                    </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={clearHandler}>&#10005;</div>
                
                        
            </div>
            )
    }
    

export default CheckoutItem;