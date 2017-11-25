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


  it('Should toggle completed value when handle toggle called', () => {
     var todoData = {id:11, text:"Do stuff", completed:false};
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
     todoApp.setState({todos:[todoData]});
     expect(todoApp.state.todos[0].completed).toBe(false);
     todoApp.handleToggle(11);
     expect(todoApp.state.todos[0].completed).toBe(true);
  });

});
