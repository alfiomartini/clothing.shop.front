import './App.css';
import React from 'react';

// https://www.sitepoint.com/react-router-complete-guide/
import {Route, Switch, Redirect} from 'react-router-dom';

// importing this for debugguing purposes
// import {store} from './reducers/store';
 
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import NavHeader from './components/NavHeader/NavHeader.jsx';
import SignInUpPage from './pages/SignInUpPage/SignInUpPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';

import {auth, createUserProfileDoc, addCollectionAndDocs} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './reducers/actions';
import {selectCurrentUser, selectCollectionsArray} from './reducers/selectors';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentUser:null}
  }

  updateState = userAuth => {
    // console.log('userAuth', userAuth);
    const {email, displayName, uid} = userAuth;
    this.setState({currentUser:{email, displayName, uid}});
  }
  

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged (userAuth => {
      // if there is an authenticated user
      // console.log('app userAuth', userAuth);
      if (userAuth){
        // fetch  a reference to the user from the db (existing or created)
       // onSnapshot queries the 'exists' property of snapShot
        // it must be true, since we have an authUser and hence data (query.data()) query = doc
        // https://firebase.google.com/docs/firestore/query-data/listen
        createUserProfileDoc(userAuth)
        .then(userRef => {
          userRef.onSnapshot(doc => {
            this.setState({currentUser:{
                id: doc.id,
                ...doc.data() //json data converted to js
              }
            });
            //redux update
            this.props.updateUser({
              id: doc.id,
              ...doc.data()
            });
          })
        })
        .catch(error => console.log('Error accessing data  from', userAuth));
      } else {
        // user is signed out
        console.log('No user is signed in');
        this.setState({currentUser:null});
        this.props.updateUser(null);
      }
    });
    const fileteredCollection = this.props.collectionsArray.map(({title, items})=>{
      return {title, items}
    });
    addCollectionAndDocs('collections', fileteredCollection)
    .then(()=>console.log('Collections added to firestore'))
    .catch(()=>console.log('Error in batch transaction (collections)'));
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    // console.log('app store', store.getState());
    // console.log('app local state', this.state);
    return (
      <div>
        <NavHeader/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          {
          !(this.props.currentUser) &&
             <Route exact path='/signin' 
             render = {props => (<SignInUpPage {...this.props} updateAppState = {this.updateState} />)}
             />
          }
          <Route path='/checkout' component={CheckoutPage}/>
          <Redirect to = '/'/>
        </Switch>
      </div>
    )
  }
}


// redux stuff
const mapStateToProps = state => ({
  currentUser:selectCurrentUser(state),
  collectionsArray:selectCollectionsArray(state)
})

// const mapStateToProps = state => ({
//   currentUser:state.user.currentUser
// })

// https://stackoverflow.com/questions/45169566/how-does-mapdispatchtoprops-work-in-react-redux

//redux stuff
const mapDispatchToProps = dispatch => ({
  // update user is the name of the property that is
  // added to the component
   updateUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);