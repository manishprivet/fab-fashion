import React from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropDown;
