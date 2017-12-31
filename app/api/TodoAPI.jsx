var uuid = require('node-uuid');
var $ = require('jquery');

module.exports = {
  // setTodos: function(todos) {
  //   if ($.isArray(todos)) {
  //     localStorage.setItem('todos', JSON.stringify(todos)); // cannot set array on storage
  //     return todos;
  //   }
  // },

  // fetchTodos: function() {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //   try {
  //     todos = JSON.parse(stringTodos);
  //   } catch (e) {
  //     console.log("Unable to get todos from local storage..." + e);
  //   }
  //
  //   return $.isArray(todos)
  //     ? todos
  //     : [];
  // },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted - filter is built in
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });

    // sort is built in (similar to Java sort)
    filteredTodos.sort((a, b) => {
      if (a.completed && !b.comleted) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;

    });

    return filteredTodos;
  }
};
