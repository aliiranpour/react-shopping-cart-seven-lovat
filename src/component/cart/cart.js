import React from 'react';
import './cart.css';
import Removebtn from '../removebtn/removebtn';
import Proceedbtn from '../proceedbtn/Proceedbtn';
import { useState } from 'react';
import Register from '../registerform/Register'

const Cart = ({ items, removeFromCart }) => {
  const calculateTotal = () => {
    let newTotal = 0;
    for (const item of items) {
      newTotal += item.price * item.count;
    }
    return newTotal.toFixed(1);
  };

  const cartItems = items.filter(item => item.count > 0);

  const [showRegister, setShowRegister] = useState(false);

  const handleProceed = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className='cart'>
      <span className='carttitle'>
        {cartItems.length === 0 ? 'Cart is Empty' : `You have ${cartItems.length} item(s) in the Cart`}
      </span>
      <div className='cartpart'>
        {cartItems.map((item) => (
          <div key={item.id} className='cardcart'>
            <img src={item.url} alt={item.description} className='cartimg' />
            <div className='infocart'>
              <p>{item.description}</p>
              <div className='rmvandprice'>
                <p>${item.price} * {item.count}</p>
                <Removebtn item={item} removeFromCart={removeFromCart} showRegister={showRegister} setShowRegister={setShowRegister} calculateTotal={calculateTotal}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && 
      <div>
        <div className='totalandproceedbtn'>
          <p>Total: ${calculateTotal()}</p>
          <Proceedbtn onClick={handleProceed} />
        </div>
          {showRegister? <Register />: <></>}
      </div>
      }
    </div>
  );
};

export default Cart;
