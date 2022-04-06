import { Todo } from "@/types/todo"
import axios from "axios";
import { reactive } from "vue";

type State = {
  todoList: Array<Todo>;
}

export const useStore = () => {
  //state
  const globalState = reactive<State>({
    todoList: []
  });

  //actions
  const setTodoList = async () => {
    const response = await axios.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
    for(const todo of response.data){
      globalState.todoList.push(new Todo(
        todo.userId,
        todo.id,
        todo.title,
        todo.completed
      ));
    }
    console.log(globalState);
  }
  return { globalState, setTodoList }
}
