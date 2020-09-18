import React from 'react';
import './Checkout.scss';
import { useTypedSelector } from '../../redux/rootReducer';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const Checkout = () => {
  const items = useTypedSelector((state) => selectCartItems(state));
  const total = useTypedSelector((state) => selectCartTotal(state));

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {items.map((item) => (
        <CheckoutItem item={item} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

export default Checkout;
