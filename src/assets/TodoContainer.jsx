import React from 'react';
import Todo from './Todo';

const TodoContainer = ({ todos, delTodo }) => {
  return (
    <>
      <div className="container">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} delTodo={delTodo} />
        ))}
      </div>
    </>
  );
};

export default TodoContainer;
