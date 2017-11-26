var uuid = require('node-uuid');
var $ = require('jQuery');

module.exports = {
  setTodos: function (todos){
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));// cannot set array on storage
      return todos;
    }
  },

  fetchTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    } catch (e){
      console.log("Unable to get todos from local storage..." + e);
    }

    return $.isArray(todos)?todos:[];



    // return [
    //   {
    //     id: uuid(),
    //     text: "Walk the dog.",
    //     completed: false
    //   }, {
    //     id: uuid(),
    //     text: "Clean the bathrooms.",
    //     completed: false
    //   }, {
    //     id: uuid(),
    //     text: "Fix the thing that is broken.",
    //     completed: false
    //   }, {
    //     id: uuid(),
    //     text: "Go to store.",
    //     completed: true
    //   }
    // ]
  }
};
