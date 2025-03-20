// components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <li>
      {item.name} - ${item.price} x {item.quantity}
      <button onClick={handleRemoveItem}>Remove</button>
    </li>
  );
}

export default CartItem;