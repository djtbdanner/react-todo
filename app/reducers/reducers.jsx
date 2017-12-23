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
        ...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
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
        if (todo.id === action.id){
          nextCompleted = !todo.completed;
        }
        return {
          ...todo,
          completed: nextCompleted,
          completedAt: nextCompleted? moment().unix(): undefined
        };

      });
    default:
      return state;
  };
};