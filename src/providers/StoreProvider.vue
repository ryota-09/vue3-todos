<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { storeKey, useStore } from "./StoreProvider";
export default defineComponent({
  setup() {
    provide(storeKey, useStore());
    return {  }
  },
});
</script>

<style scoped></style>
