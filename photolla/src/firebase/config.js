  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWbzePZm3xWYE-d7FIrZQEsUxosvjiA_g",
    authDomain: "photolla-54b3e.firebaseapp.com",
    projectId: "photolla-54b3e",
    storageBucket: "photolla-54b3e.appspot.com",
    messagingSenderId: "825710805739",
    appId: "1:825710805739:web:20b7d8cbdf6d29a65ff4ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };