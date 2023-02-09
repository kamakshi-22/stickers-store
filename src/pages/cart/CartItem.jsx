import React from 'react'
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = React.useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className="description">

                <h3>{productName}</h3>
                <p>Rs. {price}</p>

            </div>

            <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input 
                        value={cartItems[id]} 
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
        </div>
    )
}
