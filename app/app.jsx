var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');

var action = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log("New State", store.getState());
});

$(document).foundation();

// application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
     <TodoApp/>
  </Provider>,
   document.getElementById('app')
 );
