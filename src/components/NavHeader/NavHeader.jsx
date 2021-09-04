import React from 'react';
// import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

// import '../../styles/NavHeader.scss';

import {LogoBox, NavContainer, Options, LinkBox, OptionDiv} from './NavHeaderStyles';

import {selectCartHidden} from '../../reducers/selectors';
import {selectCurrentUser} from '../../reducers/selectors'

const NavHeader = ({currentUser, hidden}) => {

  const renderSignOut = () => {
    // console.log('current user', currentUser)
    if (currentUser){
      return (
        <OptionDiv onClick={() => auth.signOut()}>
         Sign Out
        </OptionDiv>)
    } else {
      return <LinkBox to='/signin' >Sign In</LinkBox>
    }
  }
  return (
    <NavContainer>
      <LogoBox to='/' >
        <h2> Clothing Shop</h2>
      </LogoBox>
      <Options>
        <LinkBox to='/shop'>
          SHOP
        </LinkBox>
        <LinkBox to='/shop'>
          CONTACT
        </LinkBox>
        {renderSignOut()}
        <CartIcon className='' />
      </Options>
      {hidden ? null: <CartDropdown />}
    </NavContainer>
  )
}

// state is the root reducer
// it binds the currentUser property to the props
// object of the NavHeader component
const mapStateToProps = (state) => ({
   hidden: selectCartHidden(state),
   currentUser: selectCurrentUser(state)
});


// connect is a highetr order function that return a
// higher order component, that takes NavHeader as its
// child
export default connect(mapStateToProps)(NavHeader);