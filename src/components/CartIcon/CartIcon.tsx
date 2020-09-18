import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cartActions';

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toogleCartHidden());

  return (
    <div onClick={handleClick} className="cart-icon">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
