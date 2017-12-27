import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

// create mock store
var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123',
        text: "Please do some stuff",
        completed: false,
        createdAt: 98798778
      }
    };

    var res = actions.addTodo(action.todo);
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

  // testing asynch action - this is a mock!!! add redux mock store
  // it is asynchronous too
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = "My todo item";

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();// will return all actions on mock store
      expect (actions[0]).toInclude({type: 'ADD_TODO'});
      expect (actions[0].todo).toInclude({text:todoText});

    }).catch(done);
    done();
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
