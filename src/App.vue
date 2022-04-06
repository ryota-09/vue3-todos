<template>
  <StoreProvider>
    <router-view />
  </StoreProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StoreProvider from "@/providers/StoreProvider.vue";
export default defineComponent({
  components: {
    StoreProvider,
  },
  setup() {
    return {};
  },
});
</script>
<style>
</style>
