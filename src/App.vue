<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import NavDock from '@/components/NavDock.vue'
import ScrollVelocity from '@/components/vue-bits/ScrollVelocity.vue'
import { profile } from '@/data/resume'
</script>

<template>
  <a
    href="#about"
    class="fixed top-4 left-4 z-50 -translate-y-20 rounded-md bg-accent px-3 py-2 text-sm font-medium text-ink focus:translate-y-0"
  >Skip to content</a>

  <header class="absolute inset-x-0 top-0 z-40">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <a href="#home" class="font-display text-lg font-semibold tracking-tight text-white">
        {{ profile.initials }}<span class="text-accent">.</span>
      </a>
      <a
        :href="`mailto:${profile.email}`"
        class="hidden rounded-full border border-white/10 bg-ink/50 px-4 py-1.5 text-sm text-white/80 backdrop-blur transition hover:border-accent/60 hover:text-white sm:inline-block"
      >{{ profile.email }}</a>
    </div>
  </header>

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <div class="overflow-hidden border-y border-line py-8 select-none" aria-hidden="true">
      <ScrollVelocity
        :texts="['Vue.js · Nuxt.js · Node.js · Express ·', 'MongoDB · PostgreSQL · Stripe · Firebase ·']"
        :velocity="60"
        class-name="font-display px-4 text-white/10"
      />
    </div>
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </main>

  <NavDock />
</template>
