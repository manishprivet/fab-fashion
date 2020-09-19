import React from 'react';
import './CheckoutItem.scss';
import { Item } from '../../data/shop';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cartActions';

const CheckoutItem = ({ item }: { item: Item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={() => dispatch(removeItemFromCart(item))} className="arrow">
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={() => dispatch(addItemToCart(item))} className="arrow">
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div onClick={() => dispatch(clearItemFromCart(item))} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
