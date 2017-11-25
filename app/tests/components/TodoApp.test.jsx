var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('Todo App', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });


  it('Should add todo to state on handle todo', () => {
     var todoText = "Do some stuff";
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
     todoApp.setState({todos:[]});
     expect(todoApp.state.todos[0]).toBe(undefined);

     todoApp.handleAddTodo(todoText);
     expect(todoApp.state.todos[0].text).toBe(todoText);
  });

});
