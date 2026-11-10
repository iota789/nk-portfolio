<script setup lang="ts">
import { Boxes, CreditCard, Truck, Workflow } from 'lucide-vue-next'
import ScrollReveal from '@/components/vue-bits/ScrollReveal.vue'
import SpotlightCard from '@/components/vue-bits/SpotlightCard.vue'
import AnimatedContent from '@/components/vue-bits/AnimatedContent.vue'
import { profile } from '@/data/resume'

const focus = [
  { icon: Workflow, title: 'B2B workflows', text: 'Cart, negotiation, checkout and fulfilment flows for multi-vendor marketplaces.' },
  { icon: Boxes, title: 'Pricing engines', text: 'Service layers that compute customer-specific prices from loyalty tiers and business rules.' },
  { icon: Truck, title: 'Logistics', text: 'Shipment creation, vendor pickups, tracking and last-mile delivery coordination.' },
  { icon: CreditCard, title: 'Integrations', text: 'Stripe payments, Firebase, WhatsApp Business and Meta Graph APIs.' },
]
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
    <p class="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
      <span>01</span><span class="h-px w-10 bg-accent/50" /><span>About</span>
    </p>

    <ScrollReveal
      :base-opacity="0.12"
      :base-rotation="2"
      :blur-strength="6"
      container-class-name="!my-0"
      text-class-name="font-display !font-medium !text-[clamp(1.5rem,3.4vw,2.6rem)] !leading-[1.35] text-white"
    >
      {{ profile.summary }}
    </ScrollReveal>

    <div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <AnimatedContent
        v-for="(f, i) in focus"
        :key="f.title"
        :distance="40"
        :delay="i * 0.08"
        :duration="0.7"
        class-name="h-full"
      >
        <SpotlightCard class-name="h-full !p-6 border-line bg-panel" spotlight-color="rgba(66, 184, 131, 0.18)">
          <component :is="f.icon" class="h-6 w-6 text-accent" />
          <h3 class="mt-5 font-display text-lg font-semibold text-white">{{ f.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ f.text }}</p>
        </SpotlightCard>
      </AnimatedContent>
    </div>
  </section>
</template>
