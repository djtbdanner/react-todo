var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');

var action = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log("New State",state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.fetchTodos();
store.dispatch(action.addTodos(initialTodos));

$(document).foundation();

// application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
     <TodoApp/>
  </Provider>,
   document.getElementById('app')
 );
