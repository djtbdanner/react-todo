var expect = require('expect');
var reducers = require('reducers');
// deep freeze is useful for tests - will fail if something is changed.
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: "Please do some stuff",
          completed: false,
          createdAt: 98798778
        }
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo completed flag and time', () => {
      var todos = getATodoArray()
      var updates = {
        completed: true,
        completedAt: 654987
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(2);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
      expect(res[0].text).toEqual(todos[0].text);
      expect(res[1].completed).toEqual(false);

      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toNotExist();
    });

    it('should clear todos on logout', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: "Please do some stuff",
          completed: false,
          createdAt: 98798778
        }
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);

      var action = {type: 'LOGOUT'};
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(0);
    });
  });

  it('should generate add todos action object', () => {
    var todoArray = getATodoArray();
    var action = {
      type: 'ADD_TODOS',
      todos: todoArray
    };

    var res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toEqual(2);
    expect(res[0].text).toEqual("Do stuff");
    expect(res[1].text).toEqual("Do other stuff and have fun");
  });

});

describe("Auth reducers", () => {
  it('should store uid on  login', () => {
    var uid = "BFR549";
    const action = {
      type: 'LOGIN',
      uid
    };
    var res = reducers.authReducer(undefined, df(action));
    expect(res).toEqual({uid: action.uid});
  });

  it('should wipe auth on log out', () => {
    const authData = {uid: "BFR549"};
    var action = {
      type: 'LOGOUT'
    };
    var res = reducers.authReducer(df(authData), df(action));
    expect(res).toEqual({});
  });
});

function getATodoArray() {
  return [
    {
      id: 11,
      text: "Do stuff",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }, {
      id: 12,
      text: "Do other stuff and have fun",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
  ];
}
