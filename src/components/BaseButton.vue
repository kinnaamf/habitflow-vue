<script setup lang="ts">
import { Plus } from "@lucide/vue";

defineEmits<{
  (e: 'openModal'): void;
}>();

</script>

<template>
  <button class="flex items-center gap-2 justify-center w-full text-sm rounded-2xl border-2 border-accent py-3 font-semibold transition-all duration-200 border-dashed text-primary
              hover:border-primary/60 hover:bg-accent/50"
          @click="$emit('openModal')"
  >
    <Plus :size="16"/>
    <span>Add New Habit</span>
  </button>
</template>

<style scoped lang="postcss">

</style>