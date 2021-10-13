import cartActions from './cartTypes';

export const toggleCardHidden = () => {
  return {
    type: cartActions.TOGGLE_CART_HIDDEN,
  };
};
