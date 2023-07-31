import './card.css';
import AddCardBtn from '../addcardbtn/addcardbtn';
import React, { useState } from 'react';
import data from '../data/data';
import Cart from '../cart/cart';

const Card = () => {
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
        <div>
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
                                item={item} // Pass the whole item to the AddCardBtn component
                                addToCart={addToCart}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Cart items={selectedItems} />
            </div>
        </div>
    );
};

export default Card;
