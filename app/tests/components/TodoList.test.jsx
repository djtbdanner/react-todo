var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');

describe('Todo TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });

});
