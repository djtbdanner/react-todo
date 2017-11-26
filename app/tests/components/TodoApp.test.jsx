var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

var TodoApp = require('TodoApp');

describe('Todo App', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo to state on handle todo', () => {
    var todoText = "Do some stuff";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: []});
    expect(todoApp.state.todos[0]).toBe(undefined);
    var now = moment().unix();

    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number', "The createdAt should be a number");
    expect(todoApp.state.todos[0].createdAt).toBeGreaterThanOrEqualTo(now, "The createdAt should be a now or later");
  });

  it('Should toggle completed value when handle toggle called', () => {
    var todoData = getATodoArray();
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    var now = moment().unix();
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeGreaterThanOrEqualTo(now, "get the timestamp");
  });

  it('Should toggle completed timestamp with toggle', () => {
    var todoData = getATodoArray()
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    var now = moment().unix();
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeGreaterThanOrEqualTo(now, "get the timestamp");
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });

});

function getATodoArray() {
  return {id: 11, text: "Do stuff", completed: false, createdAt: 0, completedAt: undefined};
}
