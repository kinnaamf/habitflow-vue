<script setup lang="ts">
  import { Bell, User } from "@lucide/vue";

  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const day = now.getDate()
</script>

<template>
  <header class="flex justify-between">
    <div class="flex flex-col gap-1">
      <p class="text-sm text-muted-foreground uppercase tracking-wide font-medium">{{ dayName }}, {{ month }} {{ day }}</p>
      <h1 class="text-3xl font-bold text-foreground leading-tight text-balance">Build Your Better Self</h1>
      <p class="text-sm text-muted-foreground">Keep going - every habit counts.</p>
    </div>
    <div>
      <div class="flex items-center gap-3 mt-1">
        <button class="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border
                transition-all duration-200 hover:border-primary/50 group">

        <Bell :size="18" class="stroke-muted-foreground group-hover:stroke-foreground transition-all duration-200" />
        </button>
        <button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-border
                      transition-all duration-200 hover:bg-primary/90">
          <User :size="18" class="stroke-card" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">

</style>