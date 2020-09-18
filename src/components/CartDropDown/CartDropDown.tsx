import React from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';
import { useTypedSelector } from '../../redux/rootReducer';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cartActions';

const CartDropDown = () => {
  const items = useTypedSelector((s) => selectCartItems(s));
  const history = useHistory();
  const dispatch = useDispatch();

  const gotToCheckout = () => {
    history.push('/checkout');
    dispatch(toogleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <Scrollbars
        style={{
          width: '100%',
          height: '240px',
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
        }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        className="cart-items"
      >
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </Scrollbars>

      <Button onClick={gotToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
