var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid text is entered', () => {

    var todoText = "this is a test todo";
    var action = actions.startAddTodo (todoText);
    var spy = expect.createSpy();
    // injecting the spy into the method
    var controls = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should NOT dispatch ADD_TODO when invalid todo is entered', () => {

    var action = {
      type: "THISISNT_ADD_TODO",
      text: "this doesn matter"
    };

    var spy = expect.createSpy();
    // injecting the spy into the method
    var controls = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    controls.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
