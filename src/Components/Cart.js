import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    setCartItems(savedCart || []);
  }, []);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


  const handleCartDelete = (deleteItem) => {
    const updatedCart = cartItems.filter(item => item.itemname !== deleteItem.itemname);
    setCartItems(updatedCart);
  };


  const increaseItemCount = (item) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(cartItem =>
        cartItem.itemname === item.itemname
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    );
  };


  const decreaseItemCount = (item) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(cartItem =>
        cartItem.itemname === item.itemname && cartItem.count > 1
          ? { ...cartItem, count: cartItem.count - 1 }
          : cartItem
      )
    );
  };

  return (
    <div className='cart'>
      <h2 className='cart-heading'>Your Cart</h2>
      <br />
      <div>
        {
          cartItems.length === 0 ? (
            <p className='cart-is-empty'>Your cart is empty!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.itemname}>
                <h4 className='item-name'>{item.itemname}</h4>
                <img className="cart-image" src={item.image} alt={item.itemname} height="100px" width="100px" />
                <p className='item-description'>{item.description}</p>
                <button onClick={() => handleCartDelete(item)} className='cart-remove'>Remove</button><br />

                <div className='item-increase-decrease'>
                  <button onClick={() => increaseItemCount(item)} className='increase-item'>+</button>
                  <p className='item-count-price'>{item.count}</p>
                  <button onClick={() => decreaseItemCount(item)} className='decrease-item'>-</button>
                </div>

                <p className='item-count-price'>{(item.count * parseFloat(item.price || 0)).toFixed(2)}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Cart;
