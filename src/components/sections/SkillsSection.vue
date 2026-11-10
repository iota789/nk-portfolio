<script setup lang="ts">
import { Code2, Database, Plug, Server, GitBranch } from 'lucide-vue-next'
import SectionHeading from '@/components/SectionHeading.vue'
import SpotlightCard from '@/components/vue-bits/SpotlightCard.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import LogoLoop from '@/components/vue-bits/LogoLoop.vue'
import { skillGroups } from '@/data/resume'
import { techLogos } from '@/data/techLogos'

const icons = [Code2, Server, Database, Plug, GitBranch]
</script>

<template>
  <section id="skills" class="py-24 md:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="The toolkit I ship with"
        lead="A JavaScript-first stack across the frontend, the API layer and the database — plus the third-party services that make products real."
      />
    </div>

    <div class="mb-14">
      <LogoLoop
        :logos="techLogos"
        :speed="60"
        :gap="56"
        :logo-height="30"
        fade-out
        fade-out-color="#07090b"
        scale-on-hover
        pause-on-hover
        aria-label="Technologies I use"
      />
    </div>

    <div class="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
      <AnimatedContent
        v-for="(g, i) in skillGroups"
        :key="g.title"
        :distance="50"
        :delay="i * 0.06"
        class-name="h-full"
      >
        <SpotlightCard class-name="h-full !p-7 border-line bg-panel" spotlight-color="rgba(56, 189, 248, 0.16)">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink">
              <component :is="icons[i]" class="h-5 w-5 text-accent" />
            </span>
            <h3 class="font-display text-lg font-semibold text-white">{{ g.title }}</h3>
          </div>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="item in g.items"
              :key="item"
              class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-white/80"
            >
              {{ item }}
            </li>
          </ul>
        </SpotlightCard>
      </AnimatedContent>
    </div>
  </section>
</template>
