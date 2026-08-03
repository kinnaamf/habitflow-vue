<script setup lang="ts">

import ProgressBar from "@/components/ProgressBar.vue";
import HabitCard from "@/components/HabitCard.vue";
import { useHabitsStore } from "@/stores/habits.ts";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";
import { Trophy } from "@lucide/vue";
import AppModal from "@/components/AppModal.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";

const { habits, countCompleted, toggleStatus } = useHabitsStore();

const showModal = ref<boolean>(false);

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6">
    <div class="flex flex-col gap-4 w-full lg:w-[640px]">
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
    <aside class="flex-1">
      <div class="card space-y-4">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 flex items-center justify-center bg-secondary rounded-full">
            <Trophy :size="14"/>
          </div>
          <h2 class="card-title">Weekly Progress</h2>
        </div>
        <div class="flex items-center justify-center">
          <ProgressCircle :progress="57" :size="110" :stroke-width="9"/>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div class="rounded-xl bg-secondary/60 p-3 text-center w-full">
            <p class="text-xl font-bold text-primary">{{ habits.length }}</p>
            <p class="text-[10px] text-muted-foreground mt-0.5">Today done</p>
          </div>
          <div class="rounded-xl bg-secondary/60 p-3 text-center w-full">
            <p class="text-xl font-bold text-primary">{{ countCompleted(habits) }}</p>
            <p class="text-[10px] text-muted-foreground mt-0.5">Today done</p>
          </div>
        </div>
      </div>
    </aside>
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