var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');
var {Provider} = require('react-redux');

var configureStore = require('configureStore');
import TodoList from "TodoList";
var TodoApp = require('TodoApp');

describe('Todo App', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todo list', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
