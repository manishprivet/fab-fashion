import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase';
import { useTypedSelector } from '../../redux/rootReducer';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { selectCardHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';

const Header = () => {
  const currentUser = useTypedSelector((state) => selectCurrentUser(state));
  const cartHidden = useTypedSelector((state) => selectCardHidden(state));

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
