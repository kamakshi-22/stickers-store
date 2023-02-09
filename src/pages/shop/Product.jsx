import React from 'react';
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = React.useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} alt={productName}/>
            <div className="description">
                <h3>{productName}</h3>
                <p>Rs. {price}</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>Add to Cart { cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
        </div>
    )
}
