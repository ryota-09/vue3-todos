<template>
  <h3 class="title">ToDo App with Vue3.0</h3>
  <br />
  <MakeTodo />
  <div class="container">
    <div class="row">
      <div
        class="col s6 todo-area teal lighten-4"
        v-for="(todo, index) of store.todoList.value"
        v-bind:key="todo.id"
      >
        <div class="row">
          <div class="title-area">
          <p class="todo-title col s9" v-on:click="toDetailPage(todo.id)">
            Title: {{ todo.title }}
          </p>
          </div>
          <div>
            <div v-if="todo.completed">
              <span><i class="material-icons">done</i>Done !</span>
            </div>
            <div v-else>
              <span class="btn-small col s2 btn-area teal lighten-1" v-on:click="store.toggleCompleted(todo.id)">yet...</span>
            </div>
          </div>
          <div>
            <span
              class="btn-small grey lighten-1"
              v-on:click="store.deleteTodo(index)"
              >Delete</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import { storeKey } from "@/providers/StoreProvider";

import MakeTodo from "@/components/MakeTodo.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    MakeTodo,
  },
  setup() {
    const store = inject(storeKey);
    const router = useRouter();

    if (!store) {
      throw new Error("");
    }

    const toDetailPage = (todoId: number) => {
      router.push("/todoDetail/" + todoId);
    };

    onMounted(() => {
      store.setTodoList();
    });

    return { store, toDetailPage };
  },
});
</script>

<style scoped>
.title {
  text-align: center;
}
.todo-area {
  margin: 10px auto;
  width: 80%;
  height: 100px;
  border-radius: 10px;
  border: 3px white solid;
}
.btn-area {
  margin: 6px 0;
}
.title-area{
  width: 100%;
  height: auto;
}
.title-area :hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
