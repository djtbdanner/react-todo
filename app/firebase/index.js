import firebase from 'firebase';
try { // the connection stuff is available at the firebase script-loader
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
} catch (e) {}

// console.log("API_KEY")
// console.log(process.env.API_KEY);
// console.log("AUTH_DOMAIN")
// console.log(process.env.AUTH_DOMAIN);
// console.log("DATABASE_URL")
// console.log(process.env.DATABASE_URL);
// console.log("PROJECT_ID")
// console.log(process.env.PROJECT_ID);
// console.log("STORAGE_BUCKET")
// console.log(process.env.STORAGE_BUCKET);


export var firebaseRef = firebase.database().ref();
export default firebase;
