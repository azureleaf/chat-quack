import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDOpXpOOBdbwEaH1kHxP_sa4n3Uqh1n0SQ",
    authDomain: "vue-auth-test-ff8ed.firebaseapp.com",
    databaseURL: "https://vue-auth-test-ff8ed.firebaseio.com",
    projectId: "vue-auth-test-ff8ed",
    storageBucket: "vue-auth-test-ff8ed.appspot.com",
    messagingSenderId: "654454537791",
    appId: "1:654454537791:web:f17898b9c9747eae"
  });
}

export default firebase;
