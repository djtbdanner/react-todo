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
    it('should add todos', () => {
      var action = {
        type: 'ADD_TODO',
        text: "Please do some stuff"
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completed', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };

      var res = reducers.todosReducer(df(getATodoArray()), df(action));
      expect(res.length).toEqual(2);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
      expect(res[1].completed).toEqual(false);

      res = reducers.todosReducer(df(res), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toNotExist();
    });
  });

  it('should gemerate add todos action object', () => {
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
