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

// https://firebase.google.com/docs/firestore/query-data/get-data
export const createUserProfileDoc = (userAuth, additional) => {
  if (!userAuth) return Promise.resolve(null);//never executed, because the 
  // call ensures userAuth is defined 

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  // snaphot is the object pointed to by userRef
  return userRef.get()
  .then(doc => {
    if (!doc.exists){
      // let us save the userAuth info in the database
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      // creates doc in the db
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additional
      })
      .then(() => 
      {
        console.log('data added successfully for user');
      })
      .catch(error => console.log('error creating user doc', error));
    } else {
      console.log('There is already data at this memory address', doc.data());
    }
    // we might want use this reference
    console.log('returning userRef');
    return userRef;
  })
  .catch( error => {
    console.log('Error in getting doc from userRef', error);
    return userRef; //anyway...
  });
}

export const addCollectionAndDocs = (collectionKey, collectionDocs) =>{
  const collectionRef = firestore.collection(collectionKey);
  // transaction object
  // https://firebase.google.com/docs/firestore/manage-data/transactions
  const batch = firestore.batch(); 
  
  collectionDocs.forEach( obj => {
    // generates a new reference
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });
  // returns a promise
  return batch.commit();
}

// collection is an array of docs from firestore snaphot on 
// 'collections' collection
export const transformCollectionToMap = (collection)=>{
  const docsArray = collection.map(doc => {
    const {items, title} = doc.data();
    const routeName = title.toLowerCase();
    const id = doc.id;
    return {
      id,
      routeName,
      title,
      items
    }
  });
  const docsMap = docsArray.reduce((map, doc) => {
    return {...map, [doc.routeName]:doc};
  }, {});
  //....
  // map[doc.title] = doc; return map
  //....
  // console.log('docsArray', docsArray);
  // console.log('docsMap', docsMap);
  return docsMap;
}

// export firebase;