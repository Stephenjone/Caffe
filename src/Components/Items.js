import React, { useState, useEffect } from 'react';
import './Items.css';

const Items = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [addedItem, setAddedItem] = useState(null); 


  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
  
    const updatedCart = [...cart, item];
    setCart(updatedCart);

   
    setAddedItem(item.itemname);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const items = [
    { 
      "itemname": 'Chicken curry',
      "image": '/Images/chicken-curry.png',
       "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', 
       "price": '60', 
       "count": 1 
      },
    { "itemname": 'Sandwich', "image": '/Images/sandwich.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '30', "count": 2 },
    { "itemname": 'Pizza', "image": '/Images/Pizza.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '50', "count": 2 },
    { "itemname": 'Maggi', "image": '/Images/maggi.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '30', "count": 2 },
    { "itemname": 'Fruit bowl', "image": '/Images/Fruit_bowl.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '35', "count": 2 },
    { "itemname": 'Fried rice', "image": '/Images/Fried-rice.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '45', "count": 2 },
    { "itemname": 'Juice', "image": '/Images/Juice.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '30', "count": 2 },
    { "itemname": 'Boiled egg', "image": '/Images/boiled-egg.png', "description": 'A hearty sandwich made with fresh bread and vegetables and juicy cheese', "price": '10', "count": 2 }
  ];

  return (
    <div className="items">
      <h2 className="items-heading">Items</h2>
      <div className="items-card">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.itemname} height="150px" width="150px" />
            <br />
            <h4>{item.itemname}</h4>
            <p>{item.description}</p>
            <strong>₹{item.price}</strong>

            <br />
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>

          
            {
              addedItem === item.itemname && <p className="added-message">Added to cart</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
