import { Item } from '../../data/shop';

export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
  const cartItemExists = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (cartItemExists)
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItemToAdd,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1,
          }
        : cartItem
    );

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
