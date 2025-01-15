import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyD4NaFCQq99gLWz66GGzXnVDFPraVOHF1E",
  authDomain: "stripe-subscription-47f1f.firebaseapp.com",
  projectId: "stripe-subscription-47f1f",
  storageBucket: "stripe-subscription-47f1f.firebasestorage.app",
  messagingSenderId: "94510325515",
  appId: "1:94510325515:web:428e6c641d01fafab5cc0e"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;