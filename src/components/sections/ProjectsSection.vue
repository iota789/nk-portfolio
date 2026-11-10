<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import SpotlightCard from '@/components/vue-bits/SpotlightCard.vue'
import DecryptedText from '@/components/vue-bits/DecryptedText.vue'
import { projects } from '@/data/resume'
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
    <SectionHeading
      index="04"
      eyebrow="Projects"
      title="Selected work"
      lead="Production platforms and side projects — from a multi-vendor marketplace to an in-browser retro arcade."
    />

    <div class="grid gap-5 lg:grid-cols-2">
      <AnimatedContent
        v-for="(p, i) in projects"
        :key="p.name"
        :distance="70"
        :delay="(i % 2) * 0.1"
        :class-name="p.featured ? 'lg:col-span-2 h-full' : 'h-full'"
      >
        <SpotlightCard
          :class-name="`group h-full border-line bg-panel !p-7 md:!p-10 ${p.featured ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(66,184,131,0.12),transparent_55%)]' : ''}`"
          spotlight-color="rgba(66, 184, 131, 0.18)"
        >
          <div :class="p.featured ? 'grid gap-10 lg:grid-cols-[1.2fr_1fr]' : ''">
            <div>
              <p class="font-mono text-xs tracking-wider text-accent uppercase">{{ p.kicker }}</p>
              <h3 class="mt-4 font-display text-3xl font-semibold text-white md:text-5xl">
                <DecryptedText
                  :text="p.name"
                  animate-on="inViewHover"
                  :speed="45"
                  :max-iterations="14"
                  sequential
                  encrypted-class-name="text-accent/70"
                />
              </h3>
              <p class="mt-5 max-w-xl leading-relaxed text-muted md:text-lg">{{ p.description }}</p>

              <a
                v-if="p.link"
                :href="p.link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:text-accent"
              >
                {{ p.link.label }} <ArrowUpRight class="h-4 w-4" />
              </a>
            </div>

            <div :class="p.featured ? '' : 'mt-8'">
              <p v-if="p.featured" class="mb-4 font-mono text-xs tracking-wider text-white/50 uppercase">What I built</p>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="h in p.highlights"
                  :key="h"
                  class="rounded-full border border-accent/25 bg-accent/6 px-3 py-1.5 text-sm text-white/85"
                >
                  {{ h }}
                </li>
              </ul>
              <ul class="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-5 font-mono text-xs text-white/55">
                <li v-for="t in p.stack" :key="t">{{ t }}</li>
              </ul>
            </div>
          </div>
        </SpotlightCard>
      </AnimatedContent>
    </div>
  </section>
</template>
