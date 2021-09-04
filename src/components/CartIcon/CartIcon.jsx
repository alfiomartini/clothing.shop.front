import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag-white.svg';
import {toggleCartHidden} from '../../reducers/actions';
import {connect} from 'react-redux';
import {selectItemsCount} from '../../reducers/selectors';

import '../../styles/CartIcon.scss';

const CartIcon = ({toggleCart, itemsNum}) => {
  return (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count' style={{color:"whitesmoke"}}>{itemsNum}</span>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemsNum:  selectItemsCount(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);