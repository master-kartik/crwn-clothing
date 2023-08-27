import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem})=>{
    const {name, id, price, quantity, imageUrl} = cartItem;
   
           return( 
           <div key={id} className='checkout-item-container'>
                <div className="image-container">
                    <img src={imageUrl} />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">{quantity}</span>
                <span className="price">{price}</span>
                <div className="remove-button">&#10005;</div>
                
                        
            </div>
            )
    }
    

export default CheckoutItem;