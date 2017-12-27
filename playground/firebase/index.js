import firebase from 'firebase';
// the connection stuff is available at the firebase script-loader
var config = {
  apiKey: "AIzaSyBTT7DN15z1BZN8GSYiYwqOJzqNt92RjfI",
  authDomain: "todo-app-eadf9.firebaseapp.com",
  databaseURL: "https://todo-app-eadf9.firebaseio.com",
  projectId: "todo-app-eadf9",
  storageBucket: "todo-app-eadf9.appspot.com",
  messagingSenderId: "802353251300"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
// app object name and version
firebaseRef.set({app:{name:"Todo App", version: 1}}).then(() => {
  console.log('Set Worked!');
}, (e) => {
  console.log('Set Failed!');
})

 //firebaseRef.child('app').child('name').set('Mike');
 firebaseRef.child('app').set({name: "Todo application"});
