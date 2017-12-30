import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
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
      const actions = store.getActions(); // will return all actions on mock store
      expect(actions[0]).toInclude({type: 'ADD_TODO'});
      expect(actions[0].todo).toInclude({text: todoText});

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

  it('should generate update todo action', () => {
    var updates = {
      completed: false
    };
    var id = 5;
    var action = {
      type: 'UPDATE_TODO',
      id,
      updates
    };

    var res = actions.updateTodo(5, updates);
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();
        return testTodoRef.set({text: 'Something to do', completed: false, createdAt: 54654687988})
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it("Should toggle todo and dispatch UPDATE_TODO action ", (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({type: "UPDATE_TODO", id: testTodoRef.key});
        expect(mockActions[0]).toInclude({completed: true});
        expect(mockActions[0].updates.completedAt).toExist();
        done();

      }, done); // done called with arguments moca assumes failure
      done();
    });

    it("Should populate todos and dispatch ADD_TODOs!", (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({type: "ADD_TODO", text: 'Something to do', completed: false, createdAt: 54654687988});
        expect(mockActions[0].todos.length).toEqual(1);
      }, done);
      done();
    });


  });
});
