import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Habit {
  name: string
  type: string
  streak: number
  icon: string
  status: 'completed' | 'uncompleted' | string
}

export const useHabitsStore = defineStore('habits', () => {
  const habits = ref<Habit[]>([
    { name: 'Morning Run', type: 'Daily', streak: 10, icon: '🏃', status: 'completed' },
    { name: 'Read 30 mins', type: 'T W F', streak: 5, icon: '📖', status: 'uncompleted' },
  ])

  const habitIcons = ref(['🏃', '📖', '💧', '🧘', '🏋️', '🌙', '🎯', '✍️', '🍎', '🖥️', '🚴', '🎨'])

  const toggleStatus = (habit: Habit) => {
    return habit.status = habit.status === 'completed' ? 'uncompleted' : 'completed'
  }

  const countCompleted = (habits: Habit[]) => {
    return habits.reduce((count, habit) => {
      return habit.status === 'completed' ? count + 1 : count
    }, 0)
  }

  const addHabit = (newHabit: Habit) => {
    habits.value.push(newHabit)
  }

  return { habits, toggleStatus, countCompleted, habitIcons, addHabit }
})
