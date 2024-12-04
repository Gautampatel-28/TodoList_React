import React from 'react';

const Todo = ({ todo, index, delTodo }) => {
  return (
    <>
      <div className="todo">    
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox" />
          <button onClick={() => delTodo(index)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Todo;