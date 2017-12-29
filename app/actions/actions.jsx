import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {type: 'SET_SEARCH_TEXT', searchText}
};

export var addTodo = (todo) => {
  return {type: 'ADD_TODO', todo}
};

export var startAddTodo = (text) => {
  return(dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var toggleShowCompleted = () => {
  return {type: 'TOGGLE_SHOW_COMPLETED'}
};

export var updateTodo = (id, updates) => {
  return {type: 'UPDATE_TODO', id, updates}
};

export var startToggleTodo = (id, completed) => {
  return(dispatch, getState) => {
    var todoRef = firebaseRef.child('todos/' + id);
    var updates = {
      completed,
      completedAt: completed
        ? moment().unix()
        : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var startAddTodos = () => {
  return(dispatch, getState) => {
    firebaseRef.child('todos').once('value').then((snapshot) => {
      var keys = Object.keys(snapshot.val());
      var todos = [];
      for (var key in keys) {
        var id = keys[key];
        todos.push({
          id,
          ...snapshot.val()[id]
        });
      }
      return (dispatch(addTodos(todos)));
    }, (e) => {
      console.log('unable to fetch value!', e);
    });
  };

};

export var addTodos = (todos) => {
  return {type: 'ADD_TODOS', todos}
};
