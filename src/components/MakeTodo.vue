<template>
  <div>
    <div class="make-todo">
      <div class="container">
        <div class="row">
          <div class="input-field col s8 offset-s1">
            <textarea
              id="textarea1"
              class="materialize-textarea"
              v-model="textContent"
            ></textarea>
            <label for="textarea1">Make Your Todo</label>
          </div>
          <div class="col s3">
            <div>
              <span class="btn-small" v-on:click="saveTodo">Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { storeKey } from "@/providers/StoreProvider";
import { Todo } from "@/types/todo";
export default defineComponent({
  setup() {
    const textContent = ref("");
    const store = inject(storeKey);
    if (!store) {
      throw new Error("");
    }

    const saveTodo = (): void => {
      ///////IDの採番/////
      const newTodo = new Todo(
        1,
        201,
        textContent.value,
        false
      );
      store.addTodo(newTodo);
      textContent.value = "";
    };

    return { textContent, saveTodo };
  },
});
</script>

<style scoped></style>
