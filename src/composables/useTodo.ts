import { ref, inject } from "vue";

import { Todo } from "@/types/todo";
import { storeKey } from "@/providers/StoreProvider";

export const useTodo = () => {
  const currentTodo = ref<Todo>();

  const store = inject(storeKey);
  if (!store) {
    throw new Error("");
  }

  const getTodoById = (todoId: number) => {
    for (const todo of store.todoList.value) {
      if (todo.id === todoId) {
        currentTodo.value = new Todo(
          todo.userId,
          todo.id,
          todo.title,
          todo.completed
        );
      }
    }
    console.log(currentTodo.value);
  };

  return { currentTodo, getTodoById };
};
