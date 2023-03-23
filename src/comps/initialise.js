
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
 export default function initialize () {

    var config = {
        apiKey: "AIzaSyABEcd6LanWp3JtR8Lc7cq_5-qWN1iSLTk",
        authDomain: "superchat-b7d5b.firebaseapp.com",
        databaseURL: "https://superchat-b7d5b.firebaseio.com",
        projectId: "superchat-b7d5b",
        storageBucket: "superchat-b7d5b.appspot.com",
        messagingSenderId: "534462431203"
      };

      firebase.initializeApp(config);    
    

  }