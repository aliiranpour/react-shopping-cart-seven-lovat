import React from 'react'
import './second_header.css'
import Topnav from '../top nav/top-nav'
import Cart from '../cart/cart'
import { useState } from 'react';
import data from '../data/data';
import AddCardBtn from '../addcardbtn/addcardbtn';


const SecondHeader = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
      const existingItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);
      if (existingItem) {
          const updatedItems = selectedItems.map((selectedItem) =>
              selectedItem.id === item.id ? { ...selectedItem, count: selectedItem.count + 1 } : selectedItem
          );
          setSelectedItems(updatedItems);
      } else {
          setSelectedItems([...selectedItems, { ...item, count: 1 }]);
      }
  };
  return (
    <div className='sec-header'>
        <div className='clothpart'>
          <Topnav/>
          <div class="clothlist">
            <div className='list'>
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <div>
                            <img className="img" alt={item.description} src={item.url} />
                            <p className="title">{item.description}</p>
                        </div>
                        <div className="buy-part">
                            <span className="price">$ {item.price}</span>
                            <AddCardBtn
                                item={item} 
                                addToCart={addToCart}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
          <div className='cartpart'>
            <Cart items={selectedItems} />
          </div>
    </div>
  )
}

export default SecondHeader;