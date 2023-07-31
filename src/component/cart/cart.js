import React from 'react';
import './cart.css';

const Cart = ({ items }) => {
    return (
        <div className='cart'>
            <span className='carttitle'>
                {items.length === 0 ? 'Cart is Empty' : `You have ${items.length} item(s) in the Cart`}
            </span>
            {items.map((item) => (
                <div key={item.id}>
                    <p>title: {item.description}</p>
                    <p>price: {item.price}</p>
                    <p>count: {item.count} </p>
                    <img src={item.url} alt={item.description} />
                </div>
            ))}
        </div>
    );
};

export default Cart;
