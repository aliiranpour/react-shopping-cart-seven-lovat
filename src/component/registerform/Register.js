import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const Checkoutmessage = () => {
    alert(`Need to save order for ${name}`);
  };

  return (
    <div>
      <div>
        <label htmlFor='email' className='reg-label'>Email:</label>
        <input type='email' className='reg-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor='name' className='reg-label'>Name:</label>
        <input type='text' className='reg-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='address' className='reg-label'>Address:</label>
        <input type='text' className='reg-input' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button className='checkbtn' onClick={Checkoutmessage}>Checkout</button>
    </div>
  );
}

export default Register;
