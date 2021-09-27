import React from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import CustomButtom from '../CustomButton/CustomButton';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      name:'',
      confirm:''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, password, confirm} = this.state;
    console.log('sign up state', this.state);
    if (password !== confirm){
      alert ('Passwords do not match');
      return;
    }
    try {
      // https://firebase.google.com/docs/auth/web/password-auth
      // https://stackoverflow.com/questions/37890519/firebase-storage-sample-with-400-error
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const userSignedUp = userCredential.user;
      console.log('userSignedUp', userSignedUp);

      // update dispaly name of authenticated user
      // the updateState method is passed down from the App component
      // userSignedUp.updateProfile({displayName:this.state.name})
      // .then (() => this.props.updateAppState(userSignedUp))
      // .then(()=> console.log('profile updated successfully'))
      // .catch(error => console.log(error))
      
      // console.log('user signed up', userSignedUp)
      const user = {...userSignedUp, displayName:name}
      await createUserProfileDoc(user);
      this.setState({
        email:'',
        password:'',
        name:'',
        confirm:''
      })
    } catch (error){
      console.log('error in sign up', error);
    }
  }

  render(){
    // console.log('SignUp props', this.props);
    return(
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type='text' name='name' required
            label='Display Name' onChange={this.handleChange}
            value = {this.state.name}
          />
          <FormInput type='email' name='email' required
           label='Email' onChange={this.handleChange}
           value = {this.state.email}
          />
          <FormInput type='password' name='password' required
            label='Password' onChange={this.handleChange}
            value = {this.state.password}
          />
          <FormInput type='password' name='confirm' required
            label='Confirm Password' onChange={this.handleChange}
            value = {this.state.confirm}
            />
          <CustomButtom type='submit' isGoogleBtn = {false}>
            Sign Up
          </CustomButtom>
        </form>
      </div>
    )
  }
}

export default SignUp;