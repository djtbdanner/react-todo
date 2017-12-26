var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Some todo text'
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todoData = {
      id: 199,
      text: "Do stuff",
      completed: true,
      completedAt: undefined,
      completed: false,
      createdAt: 654654
    };
    var action = {
      type: 'ADD_TODOS',
      todos: todoData
    };

    var res = actions.addTodos(action.todos);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    };

    var res = actions.toggleTodo(5);
    expect(res).toEqual(action);
  });

});
