import React from 'react'
import { PRODUCTS } from '../../products'
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../context/ShopContext';
import './Cart.scss'

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = React.useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div className='cartTitle'>
                <h1>Buy your favourite stickers</h1>
            </div>

            {totalAmount > 0 ? 
                <div className="checkout">
                    <div className='total'>
                        <p>Subtotal: Rs. {totalAmount}</p>
                        <button>Checkout</button>
                    </div>
                    
                </div>
                : <h1 className='emptyHeading'>Your cart is empty</h1>}

            <div className="wrapper">
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>
            </div>
            
            <button className="continueShopping" onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
    )
}

