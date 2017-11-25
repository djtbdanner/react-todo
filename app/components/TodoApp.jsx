var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: "Walk the dog."
        }, {
          id: uuid(),
          text: "Clean the bathrooms."
        }, {
          id: uuid(),
          text: "Fix the thing that is broken."
        }, {
          id: uuid(),
          text: "Go to bed."
        }
      ]
    };
  },

  handleAddTodo: function(text){
    //alert('new todo text ' + text);
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid() ,
          text:text
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase
    });
    alert(searchText);
  },

  render: function() {
    var {todos} = this.state;
    return (
    <div>
      <TodoSearch onSearch={this.handleSearch} />
      <TodoList todos={todos}/>
      <AddTodo handleTodoTextAdd={this.handleAddTodo}/>
    </div>);
  }
});

module.exports = TodoApp;
