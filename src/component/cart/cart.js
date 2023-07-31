import React from 'react';
import './cart.css';

const Cart = ({ items }) => {
    return (
        <div className='cart'>
            <span className='carttitle'>
                {items.length === 0 ? 'Cart is Empty' : `You have ${items.length} item(s) in the Cart`}
            </span>
            {items.map((item) => (
                <div key={item.id} className='cardcart'>
                    <img src={item.url} alt={item.description} className='cartimg'/>
                    <div className='infocart'>
                        <p> {item.description}</p>
                        <p>${item.price} * {item.count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
