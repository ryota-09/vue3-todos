<template>
  <div class="detail-page">
    <div class="container">
      <h3 class="title">Todo Detail</h3>
      <div class="detail-area teal lighten-4">
        <p>Todo ID: {{ currentTodo ? currentTodo.id : "" }}</p>
        <p>Todo Title:</p>
        <p>{{ currentTodo ? currentTodo.title : "" }}</p>
      </div>
      <br />
      <div>
        <span class="btn grey lighten-1" v-on:click="backtoList">back</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useTodo } from "@/composables/useTodo";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { currentTodo, getTodoById } = useTodo();

    const backtoList = () => {
      router.push("/");
    }

    onMounted(() => {
      const todoId = Number(route.params.id);
      getTodoById(todoId);
    });
    return { currentTodo, backtoList };
  },
});
</script>

<style scoped>
.detail-area{
  padding: 20px;
  border-radius: 10px;
}
</style>
