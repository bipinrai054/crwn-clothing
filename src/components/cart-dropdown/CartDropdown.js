import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCardHidden } from '../../redux/cart/cartActions';
import './CartDropdown.scss';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
