<script setup lang="ts">
import SplitText from '@/components/vue-bits/SplitText.vue'

defineProps<{ index: string; eyebrow: string; title: string; lead?: string }>()
</script>

<template>
  <header class="mb-12 md:mb-16">
    <p class="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
      <span>{{ index }}</span>
      <span class="h-px w-10 bg-accent/50" />
      <span>{{ eyebrow }}</span>
    </p>
    <SplitText
      :text="title"
      tag="h2"
      text-align="left"
      split-type="words"
      :delay="70"
      :duration="0.9"
      :from="{ opacity: 0, y: 30 }"
      root-margin="-60px"
      class-name="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl"
    />
    <p v-if="lead" class="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{{ lead }}</p>
  </header>
</template>
