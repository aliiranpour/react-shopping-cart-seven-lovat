import React, { useState, useEffect } from 'react';
import './cart.css';
import Removebtn from '../removebtn/removebtn';

const Cart = ({ items }) => {
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        let newTotal = 0;
        for (const item of items) {
            newTotal += item.price * item.count;
        }
        setTotal(newTotal);
    };

    useEffect(() => {
        calculateTotal();
    }, [items]);

    return (
        <div className='cart'>
            <span className='carttitle'>
                {items.length === 0 ? 'Cart is Empty' : `You have ${items.length} item(s) in the Cart`}
            </span>
            {items.map((item) => (
                <div key={item.id} className='cardcart'>
                    <img src={item.url} alt={item.description} className='cartimg' />
                    <div className='infocart'>
                        <p>{item.description}</p>
                        <p>${item.price} * {item.count}</p>
                    </div>
                    <Removebtn/>
                </div>
            ))}
            {total > 0 && <p>Total: {total}</p>}
        </div>
    );
};

export default Cart;
