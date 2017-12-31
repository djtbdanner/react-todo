var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component{

  onSubmit (e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0){
      this.refs.todoText.value = "";
      //this.props.handleTodoTextAdd(todoText);
      dispatch(actions.startAddTodo(todoText));
    } else {
      //alert("Not doing anything 'cause nothing is entered");
      this.refs.todoText.focus();
    }
  }

  render() {
   return (
      <div className="container__footer">
        <div>
          <form ref="form" onSubmit={this.onSubmit.bind(this)} className="todo-form">
            <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            <button className="button expanded">Add Todo</button>
          </form>
        </div>
    </div>);
  }
};

export default connect()(AddTodo);
