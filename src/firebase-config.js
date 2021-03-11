import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC-3OAbUS60zS9ZUCJOUCudx4LM8l-wsz8",
  authDomain: "nextbinge-1bb04.firebaseapp.com",
  projectId: "nextbinge-1bb04",
  storageBucket: "nextbinge-1bb04.appspot.com",
  messagingSenderId: "838443696855",
  appId: "1:838443696855:web:e66773730bd329c7006692"
};

firebase.initializeApp(firebaseConfig);

const dbref = firebase.database().ref();
const pathref = path => firebase.database().ref(path);

export default firebase;
export { dbref, pathref };