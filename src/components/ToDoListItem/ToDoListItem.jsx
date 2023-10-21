const ToDoListItem = ({ todo }) => {
  return <li key={todo.id}>{todo.title}</li>;
};

export { ToDoListItem };
