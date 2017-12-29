var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from "Todo";


describe('Todo object', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  });

  it('Should dispatch TOGGLE_TODO on click', () => {
     var todoData = {id:199, text:"Do stuff", completed:true};

     var action = actions.startToggleTodo(todoData.id, !todoData.completed);

     var spy = expect.createSpy();
     var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
     var $el = $(ReactDOM.findDOMNode(todo));
     TestUtils.Simulate.click($el[0]);


     expect(spy).toHaveBeenCalledWith(action);
  });
});
