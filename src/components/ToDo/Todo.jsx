import { useState } from 'react';
import { nanoid } from 'nanoid';
import todoData from 'data/todoData';
import { ToDoList } from 'components/ToDoList/ToDoList';

const ToDo = () => {
  const [todos, setTodo] = useState(todoData);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = evt => {
    setNewTask(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (newTask) {
      setTodo(prevTodo => [
        ...prevTodo,
        { id: nanoid(), title: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const onRemoveTodo = todoId => {
    setTodo(prevTodo => prevTodo.filter(todo => todo.id !== todoId));
  };

  const totoggleTodo = id => {
    const complateTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodo(complateTodos);
  };

  return (
    <div>
      <h2>LIST TASKS</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button type="submit">ADD</button>
      </form>
      <ToDoList
        todos={todos}
        onRemoveTodo={onRemoveTodo}
        totoggleTodo={totoggleTodo}
      />
    </div>
  );
};

export { ToDo };
