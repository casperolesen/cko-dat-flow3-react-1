import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>{todo.todoText}
          <a href="#/" onClick= {() => props.deleteTodo(todo.id)}> (delete </a> 
          <a href="#/" onClick= {() => props.editTodo(todo.id)}>, edit) </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}
