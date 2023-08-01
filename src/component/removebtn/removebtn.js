import React from 'react'
import './removebtn.css'

const Removebtn = ({ item, removeFromCart }) => {
  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };
  return (
    <div className='rmvbtn'>
      <button className='removebtn' onClick={handleRemoveFromCart}>Remove</button>
    </div>
  )
}

export default Removebtn;
