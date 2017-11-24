var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render on Todo component for each todo item', () => {
    var todosListToTest = [
      {
        id: 1,
        text: "Item number one."
      }, {
        id: 2,
        text: "Second Item."
      }, {
        id: 3,
        text: "this is number three."
      }, {
        id: 4,
        text: "And one more for four"
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todosListToTest}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(4);

    // - -how I did the test before learning about the scryRenderedComponentsWithType
    // var $el = $(ReactDOM.findDOMNode(todoList));
    // var spans = $el.find('div');
    // alert(spans);
    // expect(spans.length).toBe(4);
  });

});
