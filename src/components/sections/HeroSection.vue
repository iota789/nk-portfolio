<script setup lang="ts">
import { ArrowUpRight, MapPin, Mail } from 'lucide-vue-next'
import Aurora from '@/components/vue-bits/Aurora.vue'
import SplitText from '@/components/vue-bits/SplitText.vue'
import BlurText from '@/components/vue-bits/BlurText.vue'
import ShinyText from '@/components/vue-bits/ShinyText.vue'
import StarBorder from '@/components/vue-bits/StarBorder.vue'
import Magnet from '@/components/vue-bits/Magnet.vue'
import ClickSpark from '@/components/vue-bits/ClickSpark.vue'
import CountUp from '@/components/vue-bits/CountUp.vue'
import Avatar from '@/components/Avatar.vue'
import { profile, stats } from '@/data/resume'
</script>

<template>
  <section id="home" class="relative isolate min-h-svh overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Aurora :color-stops="['#0f3d2e', '#42b883', '#1e3a8a']" :amplitude="1.1" :blend="0.6" :speed="0.6" />
    </div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-b from-transparent to-ink" />

    <ClickSpark spark-color="#42b883" :spark-count="10" :spark-radius="22">
      <div class="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-24 pb-36 sm:px-6 md:pb-32">
        <div class="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div
              class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur"
            >
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <ShinyText text="Open to new opportunities" :speed="3" color="#9aa7af" shine-color="#ffffff" />
            </div>

            <p class="mb-3 font-mono text-sm text-muted">Hi, I'm</p>
            <SplitText
              :text="profile.name"
              tag="h1"
              text-align="left"
              :delay="35"
              :duration="1"
              root-margin="0px"
              class-name="font-display text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            />

            <p class="mt-6 font-display text-2xl text-white/85 md:text-3xl">{{ profile.role }}</p>

            <BlurText
              :text="profile.tagline"
              :delay="60"
              animate-by="words"
              direction="bottom"
              class-name="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            />

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <StarBorder
                as="a"
                :href="profile.resume.href"
                target="_blank"
                rel="noopener"
                color="#42b883"
                speed="5s"
                custom-class="group"
              >
                <span class="inline-flex items-center gap-2 font-medium">
                  View resume
                  <ArrowUpRight
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </StarBorder>
              <Magnet :padding="60" :magnet-strength="3">
                <a
                  :href="`mailto:${profile.email}`"
                  class="inline-flex items-center gap-2 rounded-[20px] border border-white/15 px-7 py-5.5 font-medium text-white/90 transition hover:border-accent/60 hover:text-white"
                >
                  <Mail class="h-4 w-4" /> Say hello
                </a>
              </Magnet>
            </div>

            <p class="mt-8 flex items-center gap-2 text-sm text-muted">
              <MapPin class="h-4 w-4 text-accent" /> {{ profile.location }}
            </p>
          </div>

          <div class="mx-auto w-full max-w-76 lg:max-w-sm">
            <div class="relative">
              <div class="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
              <Avatar />
              <div
                class="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink/80 px-4 py-1.5 font-mono text-xs whitespace-nowrap text-white/80 backdrop-blur"
              >
                Vue · Nuxt · Node · MongoDB
              </div>
            </div>
          </div>
        </div>

        <dl class="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          <div v-for="s in stats" :key="s.label" class="bg-ink/80 px-5 py-6 backdrop-blur">
            <dt class="text-sm text-muted">{{ s.label }}</dt>
            <dd class="mt-1 font-display text-4xl font-semibold text-white">
              <CountUp :to="s.value" :duration="1.6" /><span class="text-accent">{{ s.suffix }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </ClickSpark>
  </section>
</template>
