<script setup lang="ts">
import { computed, ref } from 'vue'
import { profile } from '@/data/resume'

const failed = ref(false)

// Frames the photo inside the circle: zoom in and centre on a focal point
// (fractions of the image's width/height), clamped so no edge ever shows.
const { zoom, focusX, focusY } = profile.photoFrame
const imgStyle = computed(() => {
  const size = zoom * 100
  const clamp = (v: number) => Math.min(0, Math.max(100 - size, v))
  return {
    width: `${size}%`,
    height: `${size}%`,
    left: `${clamp(50 - focusX * size)}%`,
    top: `${clamp(50 - focusY * size)}%`,
  }
})
</script>

<template>
  <div class="relative aspect-square w-full overflow-hidden rounded-full border border-white/10 bg-panel">
    <img
      v-if="!failed"
      :src="profile.photo"
      :alt="`Portrait of ${profile.name}`"
      class="absolute max-w-none object-cover"
      :style="imgStyle"
      @error="failed = true"
    />
    <div
      v-else
      class="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#42b88355,transparent_60%),radial-gradient(circle_at_80%_90%,#38bdf833,transparent_55%)]"
    >
      <span class="font-display text-6xl font-semibold tracking-tight text-white/90">{{ profile.initials }}</span>
    </div>
  </div>
</template>
