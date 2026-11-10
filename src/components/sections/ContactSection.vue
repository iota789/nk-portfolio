<script setup lang="ts">
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-vue-next'
import GradientText from '@/components/vue-bits/GradientText.vue'
import ClickSpark from '@/components/vue-bits/ClickSpark.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import SpotlightCard from '@/components/vue-bits/SpotlightCard.vue'
import LinkedinIcon from '@/components/LinkedinIcon.vue'
import { profile } from '@/data/resume'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { icon: MapPin, label: 'Location', value: profile.location },
]
</script>

<template>
  <section id="contact" class="pt-24 pb-40 md:pt-32">
    <ClickSpark spark-color="#38bdf8" :spark-count="12" :spark-radius="24">
      <div class="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p class="mb-6 flex items-center justify-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          <span>06</span><span class="h-px w-10 bg-accent/50" /><span>Contact</span>
        </p>
        <GradientText
          :colors="['#42b883', '#38bdf8', '#a78bfa', '#42b883']"
          :animation-speed="6"
          class-name="font-display text-5xl font-bold tracking-tight md:text-8xl !cursor-default"
        >
          Let’s build something.
        </GradientText>
        <p class="mx-auto mt-6 max-w-xl text-muted md:text-lg">
          Have a product to ship, a marketplace to scale, or a role on your team? My inbox is open.
        </p>

        <AnimatedContent :distance="40" :duration="0.7">
          <div class="mt-14 grid gap-4 text-left sm:grid-cols-2">
            <component
              :is="c.href ? 'a' : 'div'"
              v-for="c in channels"
              :key="c.label"
              :href="c.href"
              :target="c.external ? '_blank' : undefined"
              :rel="c.external ? 'noopener noreferrer' : undefined"
              class="block min-w-0"
            >
              <SpotlightCard
                :class-name="`group h-full border-line bg-panel !p-6 transition ${c.href ? 'hover:border-accent/50' : ''}`"
                spotlight-color="rgba(56, 189, 248, 0.16)"
              >
                <div class="flex items-center gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink">
                    <component :is="c.icon" class="h-5 w-5 text-accent" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs tracking-wider text-muted uppercase">{{ c.label }}</p>
                    <p class="truncate font-medium text-white">{{ c.value }}</p>
                  </div>
                  <ArrowUpRight
                    v-if="c.href"
                    class="h-5 w-5 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </SpotlightCard>
            </component>
          </div>
        </AnimatedContent>

        <footer
          class="mt-24 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row"
        >
          <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
          <span class="font-mono text-xs">Built with Vue 3, Tailwind CSS &amp; Vue Bits</span>
        </footer>
      </div>
    </ClickSpark>
  </section>
</template>
