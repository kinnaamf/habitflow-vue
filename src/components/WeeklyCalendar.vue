<script setup lang="ts">
  const now = new Date();

  const todayIndex = (now.getDay() + 6) % 7;

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - todayIndex);

  const dates = Array.from({ length: 7}, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);

    return {
      day: d.toDateString().split(' ')[0],
      date: d.getDate()
    }
  });
</script>

<template>
  <div class="card gap-2">
    <ul class="flex items-center justify-between">
      <li v-for="(date, index) in dates"
           :key="index"
           class="flex flex-col gap-1.5 items-center">
      <span class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {{ date.day }}
      </span>
        <div class="w-9 h-9 rounded-full flex items-center justify-center"
             :class="[index == todayIndex ? 'bg-primary shadow-md shadow-primary/50' : '',
                   index < todayIndex ? 'border border-border bg-card-foreground/5' : '']"
        >
        <span class="text-sm font-semibold"
              :class="[index === todayIndex ? 'text-primary-foreground' : '',
                      index > todayIndex ? 'text-muted-foreground' : '']"
        >
          {{ date.date }}
        </span>
        </div>
        <div
            v-if="index <= todayIndex"
            class="w-1.5 h-1.5 rounded-full"
            :class="index === todayIndex ? 'bg-primary' : 'bg-primary/40'"
        ></div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">

</style>