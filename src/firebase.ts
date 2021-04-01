import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBnwG7eL4IpTLaI0MDCUcY_tgGOIA_J7ZY",
  authDomain: "reduxslackclone.firebaseapp.com",
  projectId: "reduxslackclone",
  storageBucket: "reduxslackclone.appspot.com",
  messagingSenderId: "277217468253",
  appId: "1:277217468253:web:e3544073ed574448e292b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  auth,
  provider
};