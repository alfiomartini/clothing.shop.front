import React from 'react';
import '../../styles/SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

// special case of handleChange
  setEmail = (event) =>{
    this.setState({email:event.target.value})
  }

  // special case of handleChange
  setPassword = (event) =>{
    // console.log(event);
    this.setState({password:event.target.value})
  }

  handleChange= (event) => {
    const {name, value} = event.target;
    // const st = {}
    // st[name]=value;
    // this.setState(st);
    this.setState({[name]:value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email:'',
        password:''
      });
    } catch (error) {
      console.log('error in sign in', error);
    }
  }

  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" value={this.state.email} 
            id='email' name='email' required
            handleChange= {this.handleChange}
            label='Email' autoComplete='on'
          />
          <FormInput type="password" value={this.state.password} 
           id='password' name = 'password' required
           handleChange = {this.handleChange}
           label='Password'
          />
          <div className='signin-btns'>
            <CustomButton  type="submit" isGoogleBtn = {false}
            >
              Sign in
            </CustomButton>
            
            <CustomButton  type="button" isGoogleBtn = {true}
            onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;