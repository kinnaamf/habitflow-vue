<script setup lang="ts">
import type { Habit } from "@/stores/habits.ts";
import { Ellipsis } from "@lucide/vue";
import { CheckIcon } from "@lucide/vue";

defineProps<{
  habit: Habit
}>();

defineEmits<{
  (e: 'toggleStatus', habit: Habit): void;
}>();


</script>

<template>
  <div class="flex items-center bg-accent/50 justify-between border border-border p-4 rounded-2xl transition-all duration-200"
       :class="habit.status === 'completed' ? '' : 'hover:bg-accent/20 hover:border-primary/30'"
  >
    <div class="flex items-center gap-3">
      <button class="border-2 border-border w-8 h-8 rounded-full flex items-center justify-center hover:border-primary transition-all duration-200"
              :class="habit.status === 'completed' ? 'bg-primary' : 'bg-background'"
              @click="$emit('toggleStatus')"
      >
        <CheckIcon
            v-if="habit.status === 'completed'"
            :size="14" :stroke-width="3" class="stroke-card"
        />
      </button>
      <span class="text-xl">{{ habit.icon }}</span>
      <div class="flex flex-col">
        <p class="text-base font-semibold">{{ habit.name }}</p>
        <span class="text-xs text-muted-foreground">{{ habit.type }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div>
        <p class="text-base leading-none">
          🔥
          <span class="text-xs font-semibold text-muted-foreground whitespace-nowrap">
          {{ habit.streak }}
        </span>
        </p>
      </div>
      <div class="h-full py-3 pl-3 group">
        <Ellipsis :size="20" class="stroke-primary/50 group-hover:stroke-primary transition-all duration-200" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>