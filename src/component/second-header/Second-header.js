import React, { useState } from 'react';
import './second_header.css';
import Topnav from '../top nav/top-nav';
import Cart from '../cart/cart';
import data from '../data/data';
import AddCardBtn from '../addcardbtn/addcardbtn';

const SecondHeader = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortedData, setSortedData] = useState(data); 
  const [filteredData, setFilteredData] = useState(data);

  const addToCart = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id
          ? { ...selectedItem, count: selectedItem.count + 1 }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const findItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    if (findItem) {
      const removeItem = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id ? { ...selectedItem, count: 0 } : selectedItem
      );
      setSelectedItems(removeItem);
    }
  };

  const handleSortChange = (option) => {
    if (option === 'lowest') {
      const sortedByLowest = data.slice().sort((a, b) => a.price - b.price);
      setSortedData(sortedByLowest);
    } else if (option === 'highest') {
      const sortedByHighest = data.slice().sort((a, b) => b.price - a.price);
      setSortedData(sortedByHighest);
    }
  };

  const handleFilterChange = (option) => {
    if (option === 'ALL') {
      setFilteredData(data);
    } else {
      const filteredBySize = data.filter((item) => item.size.includes(option));
      setFilteredData(filteredBySize);
    }
  };

  return (
    <div className='sec-header'>
      <div className='clothpart'>
        <Topnav
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange} 
        />
        <div className='clothlist'>
          <div className='list'>
            {filteredData.map((item) => (
              <div key={item.id} className='card'>
                <div>
                  <img className='img' alt={item.description} src={item.url} />
                  <p className='title'>{item.description}</p>
                </div>
                <div className='buy-part'>
                  <span className='price'>$ {item.price}</span>
                  <AddCardBtn item={item} addToCart={addToCart} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='cartpart'>
        <Cart items={selectedItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default SecondHeader;
