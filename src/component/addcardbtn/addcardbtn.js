import './addcardbtn.css';
import React, { useState } from 'react';

const AddCardBtn = ({ item, addToCart }) => {
    
    const handleAddToCart = () => {
        addToCart(item); 
    };

    return (
        <div>
            <button className='btn' onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default AddCardBtn;
