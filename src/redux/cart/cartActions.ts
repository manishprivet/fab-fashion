import {Item} from '../../data/shop';
import {DispatchAction} from '../rootReducer';

export const toogleCartHidden = () => ({
  type: 'TOGGLE_CART_HIDDEN',
} as DispatchAction);


export const addItemToCart = (item: Item) =>
    ({type: 'ADD_CART_ITEM', payload: item} as DispatchAction)

export const clearItemFromCart = (item: Item) =>
    ({type: 'CLEAR_ITEM_FROM_CART', payload: item} as DispatchAction)

export const removeItemFromCart = (item: Item) =>
    ({type: 'REMOVE_CART_ITEM', payload: item} as DispatchAction)
