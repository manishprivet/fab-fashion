import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cartActions';
import { useTypedSelector } from '../../redux/rootReducer';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = () => {
  const dispatch = useDispatch();
  const total = useTypedSelector((state) => selectCartItemsCount(state));

  const handleClick = () => dispatch(toogleCartHidden());

  return (
    <div onClick={handleClick} className="cart-icon">
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{total}</span>
    </div>
  );
};

export default CartIcon;
