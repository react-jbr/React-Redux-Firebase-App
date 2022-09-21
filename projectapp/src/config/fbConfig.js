import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const fbConfig = {
    apiKey: "AIzaSyBdxBuqnuc2cWKz47ZUcHEnVaZK3G63Pf8",
    authDomain: "projectapp-1c8e8.firebaseapp.com",
    projectId: "projectapp-1c8e8",
    storageBucket: "projectapp-1c8e8.appspot.com",
    messagingSenderId: "580072286733",
    appId: "1:580072286733:web:72099a7bad8acfb94fc344",
    measurementId: "G-HCWB8QM6EJ"
  };

  firebase.initializeApp(fbConfig);
  firebase.firestore().settings({timestampsInSnapshot: true});
  export default firebase;