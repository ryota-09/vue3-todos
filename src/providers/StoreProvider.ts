import { useTodo } from "@/composables/useTodo";
import { Todo } from "@/types/todo";
import axios from "axios";
import { InjectionKey, reactive, toRefs } from "vue";

type State = {
  todoList: Array<Todo>;
};

export const useStore = () => {
  //state
  const globalState = reactive<State>({
    todoList: [],
  });

  //actions
  const setTodoList = async (): Promise<void> => {
    const response = await axios.get<Array<Todo>>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    for (const todo of response.data) {
      globalState.todoList.push(
        new Todo(todo.userId, todo.id, todo.title, todo.completed)
      );
    }
  };

  const addTodo = (todo: Todo) => {
    globalState.todoList.unshift(todo);
  };

  const deleteTodo = (index: number) => {
    for (let i = 0; i < globalState.todoList.length; i++) {
      if (i === index) {
        globalState.todoList.splice(index, 1);
      }
    }
  };

  const toggleCompleted = (todoId: number) => {
    for (const todo of globalState.todoList) {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    }
  };

  return {
    ...toRefs(globalState),
    setTodoList,
    addTodo,
    deleteTodo,
    toggleCompleted,
  };
};

type storeType = ReturnType<typeof useStore>;
export const storeKey: InjectionKey<storeType> = Symbol("store");
