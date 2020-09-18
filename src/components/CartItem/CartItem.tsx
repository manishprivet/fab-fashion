import React from 'react';
import './CartItem.scss';
import { Item } from '../../data/shop';

const CartItem = ({ item: { imageUrl, price, name, quantity } }: { item: Item }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
