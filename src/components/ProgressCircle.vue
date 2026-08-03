<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
      progress: number;
      size?: number;
      strokeWidth?: number;
    }>(),
    {
      progress: 0,
      size: 100,
      strokeWidth: 10
    }
)

const center = computed(() => props.size / 2)
const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

const strokeDashoffset = computed(() => {
  const clampedProgress = Math.min(100, Math.max(0, props.progress))
  return circumference.value - (clampedProgress / 100) * circumference.value
})
</script>

<template>
  <div class="relative inline-flex items-center justify-center">
    <svg :width="size" :height="size" class="-rotate-90">
      <circle
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="strokeWidth"
          class="stroke-secondary fill-none"
      />

      <circle
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          class="stroke-secondary-foreground fill-none transition-all duration-200 ease-in-out"
          :style="{strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset}"
      />
    </svg>

    <div class="absolute flex flex-col items-center justify-center text-center">
      <span class="text-xl font-bold text-foreground leading-none">{{ Math.round(progress) }}%</span>
      <span class="text-[10px] text-muted-foreground mt-0.5">done</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>