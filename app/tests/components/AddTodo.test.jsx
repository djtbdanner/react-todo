var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should call handle todo if valid todo is entered', () => {
    var spy = expect.createSpy();
    // injecting the spy into the method
    var controls = TestUtils.renderIntoDocument(<AddTodo handleTodoTextAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = "this is a test todo";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("this is a test todo");
  });

});
