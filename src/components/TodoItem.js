import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const TodoItem = ({ todo, del, open}) => {
  const delById = id => {
    del(id);
  }
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button text="Edit" variant="success" action={ () => open(todo.id, todo.title) } />
        <Button text="Delete" variant="warning" action={ () => delById(todo.id) } />
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  del: PropTypes.func.isRequired
}

export default TodoItem;

// Css inline
const todoItem = {
  background: "#ECB365",
  color: "#064663",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}