<template>
  <h3 class="title">ToDo App With Vue3.0</h3>
  <MakeTodo />
  <div class="container">
    <div class="row">
      <div
        class="col s6 todo-area teal lighten-4"
        v-for="todo of store.todoList.value"
        v-bind:key="todo.id"
      >
        <div class="row">
          <p class="todo-title col s9"  v-on:click="toDetailPage(todo.id)">Title: {{ todo.title }}</p>
          <div>
            <span class="btn-small col s2 btn-area teal lighten-1">{{todo.completed}}</span>
          </div>
          <div>
            <span class="btn-small grey lighten-1">Delete</span>
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
    }

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
.todo-title :hover{
  opacity: 0.8;
  cursor: pointer;
}
</style>
