var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      // var updatedTodos = state.map((todoOrig) => {
      //   if (todoOrig.id === action.id) {
      //     var todo = Object.assign({}, todoOrig);// cannot change object passed in
      //       todo.completed = !todo.completed;
      //     todo.completedAt = todo.completed? moment().unix(): undefined;
      //     return todo;
      //   }
      //   return todoOrig;
      // });
      // return updatedTodos;
      return state.map((todo) => {
        var nextCompleted = todo.completed;
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          }
        } else {
          return todo;
        }

      });
      case 'ADD_TODOS':
        return [
          ...state, ...action.todos
        ];
    default:
      return state;
  };
};
