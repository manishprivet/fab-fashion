import React from 'react';
import './CollectionItem.scss';
import { Item } from '../../data/shop';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';

interface Props {
  item: Item;
}

const CollectionItem = ({ item }: Props) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addItemToCart(item));

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addToCart} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

export default CollectionItem;
