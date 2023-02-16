import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.scss'
import { ShopContext } from '../../context/ShopContext';


export function Navbar() {
    const { cartItems } = React.useContext(ShopContext);
    const totalAmount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)
    return (
        <div className='navbar'>
            <div className="links">
                <Link to='/stickers-store'>Shop</Link>
                <Link to='/cart' className='cart'>
                    <ShoppingCart size={32} className="cartIcon" />
                    <p className='.cartCount'>{totalAmount}</p>
                </Link>
            </div>
        </div>
    )
}

