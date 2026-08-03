<script setup lang="ts">
import { Pencil, Trash } from "@lucide/vue";

defineEmits<{
  (e: 'edit'): void;
  (e: 'remove'): void;
}>();
</script>

<template>
  <div class="bg-card rounded-2xl w-40 border border-border shadow-lg flex flex-col overflow-hidden">
    <button
        type="button"
        class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-t-xl transition-all duration-200"
        @click="$emit('edit')"
    >
      <Pencil :size="16" class="text-muted-foreground" />
      Edit
    </button>

    <hr class="-mx-1 border-border">

    <button
        type="button"
        class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-b-xl transition-all duration-200"
        @click="$emit('remove')"
    >
      <Trash :size="16" />
      Remove
    </button>
  </div>
</template>

<style scoped lang="postcss">
</style>