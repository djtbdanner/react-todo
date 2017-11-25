var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('Should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('Should call handle search with text from field', () => {
     var spy = expect.createSpy();
     var searchText = "dog";
     var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
     todoSearch.refs.searchText.value = searchText;
     TestUtils.Simulate.change(todoSearch.refs.searchText);
     expect(spy).toHaveBeenCalledWith(false, searchText);
  });


  it('Should see checked box true', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  });

});
