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
