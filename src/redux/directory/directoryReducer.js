import SHOP_DATA from '../shop/shopData';

const INITIAL_STATE = {
  SHOP_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
