import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuSFnJz59BmAJsckIGzo2PJKCN469hFKE",
  authDomain: "catch-of-the-day-58c6f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-58c6f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;