<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import { education } from '@/data/resume'
</script>

<template>
  <section id="education" class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
    <SectionHeading index="05" eyebrow="Education" title="Foundations" />

    <div class="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-panel">
      <AnimatedContent v-for="(e, i) in education" :key="e.title" :distance="30" :delay="i * 0.08" :duration="0.6">
        <div class="grid gap-3 px-6 py-7 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-8 md:px-9">
          <span class="font-mono text-sm text-accent">{{ e.year }}</span>
          <div class="flex items-start gap-4">
            <GraduationCap v-if="i === 0" class="mt-1 hidden h-5 w-5 shrink-0 text-accent md:block" />
            <span v-else class="hidden w-5 md:block" />
            <div>
              <h3 class="font-display text-lg font-semibold text-white md:text-xl">{{ e.title }}</h3>
              <p class="mt-0.5 text-sm text-muted">{{ e.school }}</p>
            </div>
          </div>
          <span class="w-fit rounded-full border border-line px-3 py-1 font-mono text-sm text-white/80">{{ e.score }}</span>
        </div>
      </AnimatedContent>
    </div>
  </section>
</template>
