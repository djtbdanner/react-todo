import  React from 'react';
import * as Redux from 'react-redux';

import TodoSearch from 'TodoSearch';
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import * as actions from 'actions';

export class TodoApp extends React.Component{
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.startLogout());

  }

 render() {

    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick = {this.onLogout.bind(this)}>Logout</a>
       </div>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Redux.connect()(TodoApp);
