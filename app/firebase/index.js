import firebase from 'firebase';
try { // the connection stuff is available at the firebase script-loader
  var config = {
    apiKey: "AIzaSyBTT7DN15z1BZN8GSYiYwqOJzqNt92RjfI",
    authDomain: "todo-app-eadf9.firebaseapp.com",
    databaseURL: "https://todo-app-eadf9.firebaseio.com",
    projectId: "todo-app-eadf9",
    storageBucket: "todo-app-eadf9.appspot.com",
    messagingSenderId: "802353251300"
  };
  firebase.initializeApp(config);
} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;
