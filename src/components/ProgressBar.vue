<script setup lang="ts">
import { useHabitsStore } from "@/stores/habits.ts";

const { countCompleted, habits } = useHabitsStore();
</script>

<template>
  <div class="w-28 h-2 rounded-full bg-secondary overflow-hidden shrink-0">
    <div class="h-full rounded-full bg-primary transition-all duration-500"
         :style="{ width: `${countCompleted(habits) / habits.length * 100}%` }"
    ></div>
  </div>
</template>

<style scoped lang="postcss">

</style>