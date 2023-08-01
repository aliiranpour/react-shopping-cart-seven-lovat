import React from 'react';
import './cart.css';
import Removebtn from '../removebtn/removebtn';

const Cart = ({ items, removeFromCart }) => {
  const calculateTotal = () => {
    let newTotal = 0;
    for (const item of items) {
      newTotal += item.price * item.count;
    }
    return newTotal.toFixed(1);
  };

  const cartItems = items.filter(item => item.count > 0);

  return (
    <div className='cart'>
      <span className='carttitle'>
        {cartItems.length === 0 ? 'Cart is Empty' : `You have ${cartItems.length} item(s) in the Cart`}
      </span>
      {cartItems.map((item) => (
        <div key={item.id} className='cardcart'>
          <img src={item.url} alt={item.description} className='cartimg' />
          <div className='infocart'>
            <p>{item.description}</p>
            <p>${item.price} * {item.count}</p>
            <Removebtn item={item} removeFromCart={removeFromCart} />
          </div>
        </div>
      ))}
      {cartItems.length > 0 && <p>Total: ${calculateTotal()}</p>}
    </div>
  );
};

export default Cart;
