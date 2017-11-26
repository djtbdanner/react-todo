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

  describe('filterTodos', () => {

    it ('Should return all items if show completed is true', ()=>{
      var todos = getExampleTodoArray();
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toEqual(4);
    });

    it ('Should filter items if completed and showCompleted is false', ()=>{
      var todos = getExampleTodoArray();
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toEqual(2);
    });

    it ('Should sort completed to after not completed in array', ()=>{
      var todos = getExampleTodoArray();
      expect(todos[0].id).toEqual(1);
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos[0].id).toEqual(2);
    });

    it ('Should filter by string ', ()=>{
      var todos = getExampleTodoArray();
      expect(todos[0].id).toEqual(1);
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'store');
      expect(filteredTodos[0].id).toEqual(4);
      expect(filteredTodos.length).toEqual(1);
    });

    it ('Should return all when filter string is empty  ', ()=>{
      var todos = getExampleTodoArray();
      expect(todos[0].id).toEqual(1);
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toEqual(4);
    });

  });


});

function getExampleTodoArray(){
  return [
    {
      id: 1,
      text: "Walk the dog.",
      completed: true
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
