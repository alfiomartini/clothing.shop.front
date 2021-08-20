// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Software development kit
import firebase from 'firebase/app';
// cloud database
import 'firebase/firestore';
// authentication
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyDc3MtFHnH_LSTvlPoHar3rvdQqhIBJK2g",
  authDomain: "clothing-shop-eb1c9.firebaseapp.com",
  projectId: "clothing-shop-eb1c9",
  storageBucket: "clothing-shop-eb1c9.appspot.com",
  messagingSenderId: "387153539498",
  appId: "1:387153539498:web:360056f5f131b849287bd3",
  measurementId: "G-SW4ZSJ9D87"
};


// https://fredriccliver.medium.com/firebase-app-named-default-already-exists-app-duplicate-app-2747c3e4d3bb

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// firebase.initializeApp(config);
// console.log('firebase', firebase);

// initialize auth and firebase objects
export const auth = firebase.auth();
// console.log('auth', firebase.auth);
export const firestore = firebase.firestore();
// console.log('firestore', firestore);


const provider = new firebase.auth.GoogleAuthProvider();
// console.log('provider', provider);
provider.setCustomParameters({prompt:'select_account'});
// console.log(auth.signInWithPopup);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// https://stackoverflow.com/questions/37980559/is-it-better-to-return-undefined-or-null-from-a-javascript-function#:~:text=Undefined%20typically%20refers%20to%20something,return%20value%20implicitly%20returns%20undefined.
export const createUserProfileDoc = async (userAuth, additional) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  // snaphot is the object pointed to by userRef
  const snapshot = await userRef.get();
  // console.log('snaphsot', snapshot);
  if (!snapshot.exists){
    // let us save the userAuth info in the database
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    // creates snapshot
    userRef.set({
      // if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.
      displayName,
      email,
      createdAt,
      ...additional
    })
    .then(() => console.log('data added successfully for user'))
    .catch(error => console.log('error creating user', error));
  } else {
    console.log('There is already data at this memory address(reference');
  }
  // we might want use this reference
  return userRef;
}

// export firebase;