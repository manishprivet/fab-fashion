import {Item} from '../../data/shop';
import {DispatchAction} from '../rootReducer';

export const toogleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN',
} as DispatchAction);


export const addItemToCart = (item: Item) =>
    ({type: 'ADD_CART_ITEM', payload: item} as DispatchAction)
