<script setup lang="ts">
import { Briefcase, MapPin } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import SpotlightCard from '@/components/vue-bits/SpotlightCard.vue'
import { experience } from '@/data/resume'
</script>

<template>
  <section id="experience" class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
    <SectionHeading index="03" eyebrow="Experience" title="Where I've been building" />

    <ol class="relative space-y-10 border-l border-line pl-6 md:space-y-14 md:pl-10">
      <li v-for="(job, i) in experience" :key="job.company" class="relative">
        <span
          class="absolute top-8 -left-[31px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-ink md:-left-[47px]"
          :class="job.current ? 'bg-accent shadow-[0_0_0_6px_rgba(66,184,131,0.18)]' : 'bg-muted'"
        />
        <AnimatedContent :distance="60" direction="horizontal" :delay="i * 0.1" :duration="0.8">
          <SpotlightCard class-name="border-line bg-panel !p-6 md:!p-9" spotlight-color="rgba(66, 184, 131, 0.14)">
            <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="font-mono text-xs tracking-wider text-accent uppercase">{{ job.period }}</p>
                <h3 class="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">{{ job.company }}</h3>
                <p v-if="job.note" class="text-sm text-muted">{{ job.note }}</p>
              </div>
              <div class="flex flex-wrap gap-2 text-sm text-white/80 md:justify-end">
                <span class="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1">
                  <Briefcase class="h-3.5 w-3.5 text-accent" /> {{ job.role }}
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1">
                  <MapPin class="h-3.5 w-3.5 text-accent" /> {{ job.location }}
                </span>
                <span
                  v-if="job.current"
                  class="rounded-full bg-accent/15 px-3 py-1 font-medium text-accent"
                >Current</span>
              </div>
            </div>

            <p class="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">{{ job.intro }}</p>

            <ul class="mt-6 grid gap-3">
              <li v-for="p in job.points" :key="p" class="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                <span>{{ p }}</span>
              </li>
            </ul>

            <ul class="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
              <li
                v-for="t in job.stack"
                :key="t"
                class="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-white/70"
              >
                {{ t }}
              </li>
            </ul>
          </SpotlightCard>
        </AnimatedContent>
      </li>
    </ol>
  </section>
</template>
