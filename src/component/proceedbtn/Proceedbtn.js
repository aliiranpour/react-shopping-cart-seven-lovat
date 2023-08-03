import React from 'react';
import './Proceedbtn.css';

const Proceedbtn = ({ onClick }) => {
  return (
    <div>
      <button className='proceedbtn' onClick={onClick}>Proceedbtn</button>
    </div>
  );
}

export default Proceedbtn;
