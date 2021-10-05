import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5i21gvJIhhK-XCMYvao0SDSHCk-eZ168",
    authDomain: "solar-energy-system.firebaseapp.com",
    projectId: "solar-energy-system",
    storageBucket: "solar-energy-system.appspot.com",
    messagingSenderId: "141430825359",
    appId: "1:141430825359:web:2d1a20b8c5bc3a45a42bfa",
    measurementId: "G-DN6GZCN6HS"
  };

  var firebaseApp = firebase.initializeApp(firebaseConfig);
  var db = firebaseApp.firestore()

  export default db