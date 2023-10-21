import { ToDoListItem } from 'components/ToDoListItem/ToDoListItem';

const ToDoList = ({ todos, onRemoveTodo, totoggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <ToDoListItem todo={todo} />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => totoggleTodo(todo.id)}
            />
            <button type="submit" onClick={() => onRemoveTodo(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export { ToDoList };
