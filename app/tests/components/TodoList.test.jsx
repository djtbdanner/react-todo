var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {
  Provider
} = require('react-redux');
//
// var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from 'Todo';
//  var Todo = require('Todo');
import {configure} from "configureStore";

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: "Item number one.",
        completed: false,
        completedAt: undefined,
        createdAt: 87546546
      }, {
        id: 2,
        text: "Second Item.",
        completed: false,
        completedAt: undefined,
        createdAt: 87546546
      }, {
        id: 3,
        text: "this is number three.",
        completed: false,
        completedAt: undefined,
        createdAt: 87546546
      }, {
        id: 4,
        text: "And one more for four",
        completed: false,
        completedAt: undefined,
        createdAt: 87546546
      }
    ];

    var store = configure({todos});
    //  alert(store);
    var provider = TestUtils.renderIntoDocument(<Provider store={store}>
      <ConnectedTodoList/>
    </Provider>);

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    //    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todosListToTest}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(4);

    // - -how I did the test before learning about the scryRenderedComponentsWithType
    // var $el = $(ReactDOM.findDOMNode(todoList));
    // var spans = $el.find('div');
    // alert(spans);
    // expect(spans.length).toBe(4);
  });

  it('Should render message if nothing to do', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    var paragraph = $el.find('p');
    expect(paragraph.text()).toEqual("Nothing to do");
  });

});
