import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBhQJAAijaqZHUY9Z8k7eFiLMrQG-5_LOo",
    authDomain: "react-app-2e7ad.firebaseapp.com",
    projectId: "react-app-2e7ad",
    storageBucket: "react-app-2e7ad.appspot.com",
    messagingSenderId: "305215286465",
    appId: "1:305215286465:web:68561542996fe452687840",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
 
 export {
     db,
     googleAuthProvider,
     facebookAuthProvider,
     firebase
 }
