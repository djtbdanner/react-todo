var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
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

  render: function() {
    var {todos} = this.state;
    return (<div>
      <TodoList todos={todos}/>
    </div>);
  }
});

module.exports = TodoApp;
