<script setup lang="ts">

import ProgressBar from "@/components/ProgressBar.vue";
import HabitCard from "@/components/HabitCard.vue";
import { useHabitsStore } from "@/stores/habits.ts";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";
import { X } from "@lucide/vue";
import AppModal from "@/components/AppModal.vue";

const { habits, countCompleted, toggleStatus } = useHabitsStore();

const showModal = ref<boolean>(false);

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-foreground text-lg font-semibold">Today's Habits</h2>
        <span class="text-xs text-muted-foreground">{{ countCompleted(habits) }} of {{ habits.length }} completed</span>
      </div>
      <ProgressBar/>
    </div>
    <div class="space-y-3">
      <HabitCard v-for="(habit, index) in habits"
                 :habit="habit"
                 :key="index"
                 @toggleStatus="toggleStatus(habit)"/>
    </div>
    <BaseButton @openModal="showModal = true"/>
    <Transition name="slide-up">
      <AppModal v-if="showModal" @closeModal="showModal = false"/>
    </Transition>

  </div>
</template>

<style scoped lang="postcss">
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
  transition: all .2s;
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: all .2s;
}
.slide-up-leave-to {
  opacity: 0;
  transition: all .2s;
}
</style>