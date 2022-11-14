import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  visibleTodos: Todo[],
  deleteTodo: (id: number) => void,
  completedTodos: Todo[],
  isDeleting: boolean,
  toggleTodo: (id: number, completed: boolean) => void,
  todosToToggle: Todo[],
  todoIdToToggle: number,
  isUpdating: boolean,
};

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  deleteTodo,
  completedTodos,
  isDeleting,
  toggleTodo,
  todosToToggle,
  todoIdToToggle,
  isUpdating,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map((todo) => (
        <TodoInfo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completedTodos={completedTodos}
          isDeleting={isDeleting}
          toggleTodo={toggleTodo}
          todosToToggle={todosToToggle}
          todoIdToToggle={todoIdToToggle}
          isUpdating={isUpdating}
        />
      ))}
    </section>
  );
};
