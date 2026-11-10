<script setup lang="ts">
import { computed, h, onMounted, onUnmounted, ref, type Component } from 'vue'
import { Briefcase, FolderGit2, GraduationCap, House, Layers, Mail, User } from 'lucide-vue-next'
import Dock from '@/components/vue-bits/Dock.vue'
import LinkedinIcon from '@/components/LinkedinIcon.vue'
import { profile } from '@/data/resume'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
const icon = (c: Component) => () => h(c, { class: 'h-5 w-5 text-white/90', 'stroke-width': 1.75 })

const allItems = [
  { icon: icon(House), label: 'Home', onClick: () => go('home') },
  { icon: icon(User), label: 'About', onClick: () => go('about') },
  { icon: icon(Layers), label: 'Skills', onClick: () => go('skills') },
  { icon: icon(Briefcase), label: 'Experience', onClick: () => go('experience') },
  { icon: icon(FolderGit2), label: 'Projects', onClick: () => go('projects') },
  { icon: icon(GraduationCap), label: 'Education', onClick: () => go('education'), desktopOnly: true },
  { icon: icon(Mail), label: 'Contact', onClick: () => go('contact') },
  {
    icon: icon(LinkedinIcon),
    label: 'LinkedIn',
    onClick: () => window.open(profile.linkedin, '_blank', 'noopener'),
    desktopOnly: true,
  },
]

// The full dock is ~430px wide; phones get a trimmed, smaller version.
const query = window.matchMedia('(max-width: 639px)')
const isMobile = ref(query.matches)
const onChange = (e: MediaQueryListEvent) => (isMobile.value = e.matches)
onMounted(() => query.addEventListener('change', onChange))
onUnmounted(() => query.removeEventListener('change', onChange))

const items = computed(() => (isMobile.value ? allItems.filter(i => !i.desktopOnly) : allItems))
</script>

<template>
  <nav aria-label="Section navigation" class="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center">
    <div class="pointer-events-auto">
      <Dock
        :key="isMobile ? 'm' : 'd'"
        :items="items"
        :panel-height="isMobile ? 56 : 62"
        :base-item-size="isMobile ? 40 : 44"
        :magnification="isMobile ? 48 : 64"
        :distance="isMobile ? 100 : 160"
        class-name="!border-white/10 !bg-ink/70 backdrop-blur-xl"
      />
    </div>
  </nav>
</template>
