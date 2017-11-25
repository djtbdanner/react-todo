var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: "Walk the dog."
        }, {
          id: 2,
          text: "Clean the bathrooms."
        }, {
          id: 3,
          text: "Fix the thing that is broken."
        }, {
          id: 4,
          text: "Go to bed."
        }
      ]
    };
  },

  handleAddTodo: function(text){
    alert('new todo text ' + text);
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
