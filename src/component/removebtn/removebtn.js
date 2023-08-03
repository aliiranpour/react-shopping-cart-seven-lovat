import React from 'react'
import './removebtn.css'

const Removebtn = ({ item, removeFromCart, showRegister, setShowRegister, calculateTotal }) => {
  const handleRemoveFromCart = () => {
    removeFromCart(item);
    if(showRegister===true && calculateTotal===0.0) setShowRegister(false)
  };
  return (
    <div className='rmvbtn'>
      <button className='removebtn' onClick={handleRemoveFromCart}>Remove</button>
    </div>
  )
}

export default Removebtn;
