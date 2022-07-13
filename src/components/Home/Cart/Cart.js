import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Data from '../../config/Data.json'

import './cart.css'
import CartPage from './CartPage';

const Cart = () => {
    return (
        <div className="cart">
            {
                Data.map(item =>
                    <div>
                        {/* <CartPage item={item} /> */}
                    </div>
                )
            }

        </div>
    );
};

export default Cart;