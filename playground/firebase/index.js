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
firebaseRef.set({
  app: {
    name: "Todo App",
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: "Dave Danner",
    age: 53
  }
}); //.then(() => {
//   console.log('Set Worked!');
// }, (e) => {
//   console.log('Set Failed!');
// })

/// challenge us .on to listen for changes in user object. The update user name to a differnt name, then update apps name see
 firebaseRef.child('app').on('value', (snapshot) => {
   console.log('Data changed', snapshot.val());
 });

console.log('updating app name');
firebaseRef.update({'app/name': 'Todo Application'});

console.log('updating user name');
firebaseRef.update({'user/name': 'Some User'});

// fetch data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire datbase', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value!', e);
// });



// // data listener
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
// // turn listener off
// // firebaseRef.off();
// firebaseRef.update({isRunning: false});



// -- examples

//firebaseRef.child('app').child('name').set('Mike');
//firebaseRef.child('app').set({name: "Todo application"});

/// multipath update
// firebaseRef.update({isRunning: false, 'app/name': 'Todo Application'});
//
// firebaseRef.child('app').update({name: 'My Todo Application!'}).then(() => {
//   console.log('update Worked!');
// }, (e) => {
//   console.log('update Failed!');
// })

// challenge - multiplat updat app name and user name in one call
// firebaseRef.update({
//   'app/name' : 'Todo application (mpath)',
//   'user/name' : 'User name'
// });

// challenget update using child with two calls
// firebaseRef.child('app').update({name:"todo application via child update"});
// firebaseRef.child('user').update({name:"user name via child update"});

//firebaseRef.remove();
//firebaseRef.child('app/name').remove();
//firebaseRef.child('app').update({version: '2.0.0', name : null});

// challenge remove isRunning age by setting to null - remove age by calling remove
// firebaseRef.update({isRunning:null});
// firebaseRef.child('user/age').remove();
