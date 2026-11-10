# Narayan Kartikeyan C — Portfolio

Personal portfolio built with **Vue 3 + TypeScript + Vite + Tailwind CSS v4** and animated components from **[Vue Bits](https://vue-bits.dev)**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Editing content

All text (profile, skills, experience, projects, education) lives in [`src/data/resume.ts`](src/data/resume.ts).
Tech logos for the marquee are in [`src/data/techLogos.ts`](src/data/techLogos.ts).

**Profile photo:** save it as `public/profile.jpg` (square works best). Until then the hero shows your initials.

## Structure

```
src/
  App.vue                    page layout
  data/                      resume content + tech logos
  components/
    sections/                Hero, About, Skills, Experience, Projects, Education, Contact
    NavDock.vue              macOS-style bottom navigation (Vue Bits Dock)
    SectionHeading.vue, Avatar.vue, LinkedinIcon.vue
    vue-bits/                Vue Bits components (copied from github.com/DavidHDev/vue-bits)
```

## Vue Bits components used

| Where | Components |
| --- | --- |
| Hero | Aurora, SplitText, BlurText, ShinyText, StarBorder, Magnet, ClickSpark, CountUp |
| About | ScrollReveal, SpotlightCard, AnimatedContent |
| Skills | LogoLoop, SpotlightCard |
| Divider | ScrollVelocity |
| Projects | DecryptedText, SpotlightCard |
| Contact | GradientText, ClickSpark |
| Navigation | Dock |

