import React from 'react';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

function CartIcon({ toggleCardHidden, itemCount }) {
  return (
    <div className='cart-icon' onClick={toggleCardHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCardHidden: () => dispatch(toggleCardHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
