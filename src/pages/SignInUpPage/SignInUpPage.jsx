import React from 'react';
import './SignInUpPage.scss';
import SignIn from '../../components/SignIn/SignIn.jsx';
import SignUp from '../../components/SignUp/SignUp.jsx';

const SignInUpPage = (props) => {
  // console.log('SignInUpPage props', props);
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp updateAppState = {props.updateAppState} />
    </div>
  )
}

export default SignInUpPage