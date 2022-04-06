<template>
  <div>
    <h3>ToDo App With Vue3.0</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import { storeKey } from "@/providers/StoreProvider"
export default defineComponent({
  setup() {
    const store = inject(storeKey);

    if(!store){
      throw new Error("");
    }

    onMounted(() => {
      store.setTodoList();
    })

    return { store };
  },
});
</script>

<style scoped></style>
