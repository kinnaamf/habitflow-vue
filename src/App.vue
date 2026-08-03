<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import WeeklyCalendar from "@/components/WeeklyCalendar.vue";
import HabitDashboard from "@/components/HabitDashboard.vue";
</script>

<template>
  <div class="px-4 py-8 max-w-[960px] mx-auto">
    <AppHeader/>
    <main class="mt-6">
      <WeeklyCalendar/>
      <HabitDashboard class="mt-5"/>
    </main>
  </div>
</template>

<style scoped></style>
