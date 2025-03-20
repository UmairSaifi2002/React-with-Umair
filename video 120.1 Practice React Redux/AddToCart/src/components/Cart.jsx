// components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Amount: ${cart.totalAmount.toFixed(2)}</p>
      <ul>
        {cart.items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;