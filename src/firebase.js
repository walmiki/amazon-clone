import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyAnxj0SHREsrwY6fRoaf55U9WK6-xgUSlg",
	authDomain: "clone-55145.firebaseapp.com",
	databaseURL: "https://clone-55145.firebaseio.com",
	projectId: "clone-55145",
	storageBucket: "clone-55145.appspot.com",
	messagingSenderId: "598572202845",
	appId: "1:598572202845:web:29274db35fa86a8bfd86b4",
	measurementId: "G-8MSFNFHLY4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
