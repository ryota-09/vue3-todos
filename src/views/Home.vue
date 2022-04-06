<template>
  <h3>ToDo App With Vue3.0</h3>
  <div class="container">
    <div class="row">
      <div
        class="col s6 todo-area blue lighten-4"
        v-for="todo of store.todoList.value"
        v-bind:key="todo.id"
      >
        <div class="row">
          <p class="todo-title col s9">Title: {{ todo.title }}</p>
          <span class="btn-small col s2 btn-area blue lighten-2">{{ todo.completed }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import { storeKey } from "@/providers/StoreProvider";
export default defineComponent({
  setup() {
    const store = inject(storeKey);

    if (!store) {
      throw new Error("");
    }

    onMounted(() => {
      store.setTodoList();
    });

    return { store };
  },
});
</script>

<style scoped>
.todo-area {
  margin: 10px auto;
  width: 80%;
  height: 100px;
  border-radius: 10px;
  border: 3px white solid;
}
.btn-area{
  margin: 6px 0;
}
</style>
