import { ToDoListItem } from 'components/ToDoListItem/ToDoListItem';
import { TodoContainer } from './ToDoList.styled';

const ToDoList = ({ todos, onRemoveTodo, totoggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoContainer completed={todo.completed} key={todo.id}>
            <ToDoListItem todo={todo} />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => totoggleTodo(todo.id)}
            />
            <button type="submit" onClick={() => onRemoveTodo(todo.id)}>
              Delete
            </button>
          </TodoContainer>
        );
      })}
    </ul>
  );
};

export { ToDoList };
