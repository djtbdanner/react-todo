var React = require('react');
var uuid = require('node-uuid');

var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.fetchTodos()
    };
  },

  componentDidUpdate: function (){
    TodoAPI.setTodos(this.state.todos);
  },

  handleToggle: function (id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos:updatedTodos});
  },

  handleAddTodo: function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid() ,
          text:text,
          completed: false
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
      <TodoList todos={todos} onToggle={this.handleToggle}/>
      <AddTodo handleTodoTextAdd={this.handleAddTodo}/>
    </div>);
  }
});

module.exports = TodoApp;
