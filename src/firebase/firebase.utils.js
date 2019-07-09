import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCtiGUpioRDA4nJEEUaDo0vMl_yhiu-aUY",
  authDomain: "crwn-db-f8de8.firebaseapp.com",
  databaseURL: "https://crwn-db-f8de8.firebaseio.com",
  projectId: "crwn-db-f8de8",
  storageBucket: "",
  messagingSenderId: "342991933792",
  appId: "1:342991933792:web:2270c7455343f1f2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;