<script setup lang="ts">

import { X } from "@lucide/vue";

const emit = defineEmits<{
  (e: 'closeModal'): void,
}>();

import { ref } from 'vue'
import { type Habit, useHabitsStore } from "@/stores/habits.ts";

const { habitIcons, addHabit } = useHabitsStore()

const habitName = ref<string>('');
const selectedIcon = ref<string>('');
const selectedType = ref<'daily' | 'specific'>('daily');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const selectedDays = ref<string[]>([]);

const toggleDay = (day: string) => {
  const position = selectedDays.value.indexOf(day);
  if (position > -1) {
    selectedDays.value.splice(position, 1);
  } else {
    selectedDays.value.push(day);
  }
}

const handleHabitAdd = () => {
  const newHabit: Habit = {
    name: habitName.value,
    icon: selectedIcon.value,
    type: selectedType.value === 'specific'
        ? (selectedDays.value.length === 7 ? 'Daily' : selectedDays.value.join(' '))
        : 'Daily',
    streak: 0,
    status: 'uncompleted'
  }

  addHabit(newHabit);
  emit('closeModal');
}
</script>

<template>
  <div
      class="fixed inset-0 z-50 flex items-end justify-center p-0 sm:p-4 bg-foreground/40 backdrop-blur-sm"
      @click.stop="$emit('closeModal')"
  >
    <div class="h-[60vh] bg-card w-full rounded-t-2xl border border-border p-4 z-[100] flex flex-col justify-between"
         @click.stop
    >
      <div>
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold tracking-wide">New Habit</p>
          <div class="flex items-center justify-center w-8 h-8 rounded-full group hover:bg-primary/30 transition-all duration-200">
            <X :size="18"
               :stroke-width="3"
               class="stroke-muted-foreground group-hover:stroke-primary transition-all duration-200"
               @click="$emit('closeModal')"/>
          </div>
        </div>

        <div class="mt-4 space-y-3">
          <div>
            <p class="text-sm font-semibold mb-2 ml-2">Habit name</p>
            <input type="text"
                   placeholder="e.g. Morning Yoga"
                   v-model="habitName"
                   class="text-primary px-4 py-2 bg-background rounded-xl focus:outline-none ring-2 ring-border focus:ring-primary/30 transition-all duration-200 w-full"
            />
          </div>
          <div>
            <p class="text-sm font-semibold mb-2 ml-2">Choose an icon</p>
            <div class="grid grid-cols-6 gap-2">
              <button type="button"
                      v-for="icon in habitIcons"
                      :key="icon"
                      @click="selectedIcon = icon"
                      class="text-lg flex items-center justify-center aspect-square rounded-xl bg-background border transition-all duration-200"
                      :class="selectedIcon === icon ? 'border-primary ring-2 ring-primary/30 bg-primary/10' : 'border-border hover:border-primary/50'"
              >
                {{ icon }}
              </button>
            </div>
          </div>
          <div>
            <p class="text-sm font-semibold mb-2 ml-2">Frequency</p>
            <div class="grid grid-cols-2 gap-2">
              <button
                  class="py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200"
                  :class="selectedType === 'daily' ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground border border-border hover:border-primary/50'"
                  @click="selectedType = 'daily'"
              >
                Daily
              </button>
              <button
                  class="py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200"
                  :class="selectedType === 'specific' ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground border border-border hover:border-primary/50'"
                  @click="selectedType = 'specific'"
              >
                Specific days
              </button>
            </div>
            <Transition name="slide-up">
              <div v-if="selectedType === 'specific'"
                   class="flex items-center justify-between mt-3">
                <button v-for="(day, index) in days"
                        :key="index"
                        class="rounded-full w-12 h-12 aspect-square bg-background flex items-center justify-center border border-border text-sm font-semibold transition-all duration-200"
                        @click="toggleDay(day)"
                        :class="selectedDays.includes(day) ? 'bg-primary text-background' : 'bg-background text-primary'"
                >
                  {{ day }}
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-2">
          <button
              class="bg-background py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 border border-border hover:border-primary/50 hover:bg-accent/30"
              @click="$emit('closeModal')"
          >
            Cancel
          </button>
          <button
              type="submit"
              :disabled="!habitName || !selectedIcon || (selectedType === 'specific' && selectedDays.length === 0)"
              class="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90"
              @click="handleHabitAdd"
          >
            Add Habit
          </button>
        </div>
      </div>
    </div>
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