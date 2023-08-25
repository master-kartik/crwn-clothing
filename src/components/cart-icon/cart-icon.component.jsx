import './cart-icon.styles.scss'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import {ReactComponent as ShoppingIcon} from '../../assets/004 shopping-bag.svg'
import { useContext } from 'react'
const CartIcon = ()=>{
const {isCartOpen, setIsCartOpen}=useContext(CartContext)
const toggleIsCartOpen = ()=>{setIsCartOpen(!isCartOpen)}

    return(
        <div className='cart-icon-container'>
            <ShoppingIcon onClick={toggleIsCartOpen} className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )
}
export default CartIcon;