var expect = require('expect');
var TodoAPI = require('TodoAPI');


describe('Todo API', () => {
  // called before each test
  beforeEach(()=>{
    //alert("clearing local storage");
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {

    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it ('Should set valid todos array', ()=>{
      var todos = getExampleTodoArray();
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it ('Should Not set invalid todos array', ()=>{
      var todos = getExampleTodoArray();
      var batTodos = {a:"b"};
      TodoAPI.setTodos(batTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });


  describe('fetchTodos', () => {

    it ('Should return empty array for bad local storage data', ()=>{
      var emptyArray = [];
      expect(TodoAPI.fetchTodos()).toEqual(emptyArray);
    });

    it ('return todos if valid array in storage', ()=>{
      var todos = getExampleTodoArray();
      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.fetchTodos()).toEqual(todos);
    });
  });

});

function getExampleTodoArray(){
  return [
    {
      id: 1,
      text: "Walk the dog.",
      completed: false
    }, {
      id: 2,
      text: "Clean the bathrooms.",
      completed: false
    }, {
      id: 3,
      text: "Fix the thing that is broken.",
      completed: false
    }, {
      id: 4,
      text: "Go to store.",
      completed: true
    }
  ]
}
