import cartActions from './cartTypes';

export const toggleCardHidden = () => {
  return {
    type: cartActions.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: cartActions.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartActions.REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: cartActions.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
