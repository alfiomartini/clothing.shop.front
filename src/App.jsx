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

import {auth, createUserProfileDoc} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser, purge_storage} from './reducers/actions';
import {selectCurrentUser, selectCollectionsArray} from './reducers/selectors';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    // auth.onAuthStateChanged is an observer of an infinite stream
    // of events: login -> logout -> login -> logout -> login -> login, etc
    // See: pattern observable/observer in js
    this.unsubscribeFromAuth = auth.onAuthStateChanged (userAuth => {
      // if there is an authenticated user
      if (userAuth){
        console.log('Auth state changed...');
        this.props.purge_storage();
        // fetch  a reference to the user from the db (existing or created)
        // https://firebase.google.com/docs/firestore/query-data/listen
        // an authenticated user must be in the db already, so
        //  the following just returns the db reference
        //  if we hit here by a createUserWithEmailAndPassword 
        //  then the first document
        // of this userRef will be created with displayName null
        createUserProfileDoc(userAuth)
        .then(userRef => {
          userRef.onSnapshot(doc => {
            //redux update
            this.props.setCurrentUser({
              id: doc.id,
              ...doc.data() //json data converted to js
            });
          })
        })
        .catch(error => console.log('Error accessing data  from', userAuth));
      } else {
        // user is signed out
        console.log('No user is signed in');
        this.props.setCurrentUser(null);
      }
    }, error => console.log(error));
    //  the code bellow as used to add SHOPDATA to the firestore db
    // const filteredCollection = this.props.collectionsArray.map(({title, items})=>{
    //   return {title, items}
    // });
    // addCollectionAndDocs('collections', filteredCollection)
    // .then(()=>console.log('Collections added to firestore'))
    // .catch(()=>console.log('Error in batch transaction (collections)'));
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    // console.log('app store', store.getState());
    return (
      <div>
        <NavHeader unsubscribe = {this.unsubscribeFromAuth}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          {
          !(this.props.currentUser) &&
             <Route exact path='/signin' 
             render = {props => (<SignInUpPage {...this.props} />)}
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

// not memoized selection
// const mapStateToProps = state => ({
//   currentUser:state.user.currentUser
// })

// https://stackoverflow.com/questions/45169566/how-does-mapdispatchtoprops-work-in-react-redux

//redux stuff
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user)),
   purge_storage: () => dispatch(purge_storage())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);