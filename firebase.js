import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCdFHpOZ9HIH1jrM-mIPgK9Ao3gqp-uo7k",
    authDomain: "signal-clone-app-1274a.firebaseapp.com",
    projectId: "signal-clone-app-1274a",
    storageBucket: "signal-clone-app-1274a.appspot.com",
    messagingSenderId: "748360820434",
    appId: "1:748360820434:web:b37a872800739fa843af0b"
  };


  let app;
  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  } else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};