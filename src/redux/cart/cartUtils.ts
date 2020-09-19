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

export const removeItemFromCart = (cartItems: Item[], cartItemToRemove: Item) => {
  const cartItemExists = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (cartItemExists?.quantity === 1)
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity ? cartItem.quantity - 1 : 0,
        }
      : cartItem
  );
};
