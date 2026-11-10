import {
  siBitbucket,
  siCss,
  siExpress,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMeta,
  siMongodb,
  siMongoose,
  siNodedotjs,
  siNuxt,
  siPostgresql,
  siStripe,
  siSupabase,
  siTailwindcss,
  siVuedotjs,
  siWhatsapp,
  type SimpleIcon,
} from 'simple-icons'
import type { LogoItem } from '@/components/vue-bits/LogoLoop.vue'

// Brand colours that disappear on a dark background get a light fallback.
const DARK_BRANDS = new Set(['Express', 'GitHub', 'Mongoose'])

const tech: Array<[SimpleIcon, string]> = [
  [siVuedotjs, 'Vue.js'],
  [siNuxt, 'Nuxt'],
  [siJavascript, 'JavaScript'],
  [siNodedotjs, 'Node.js'],
  [siExpress, 'Express'],
  [siMongodb, 'MongoDB'],
  [siMongoose, 'Mongoose'],
  [siPostgresql, 'PostgreSQL'],
  [siSupabase, 'Supabase'],
  [siTailwindcss, 'Tailwind CSS'],
  [siHtml5, 'HTML5'],
  [siCss, 'CSS'],
  [siStripe, 'Stripe'],
  [siFirebase, 'Firebase'],
  [siWhatsapp, 'WhatsApp API'],
  [siMeta, 'Meta Graph API'],
  [siFlutter, 'Flutter'],
  [siGit, 'Git'],
  [siGithub, 'GitHub'],
  [siBitbucket, 'Bitbucket'],
]

export const techLogos: LogoItem[] = tech.map(([icon, label]) => {
  const fill = DARK_BRANDS.has(label) ? '#e6edf1' : `#${icon.hex}`
  return {
    title: label,
    ariaLabel: label,
    node: `<span style="display:inline-flex;align-items:center;gap:.6rem;font-family:var(--font-display);font-weight:500;font-size:1.05rem;color:#c9d3d9"><svg role="img" viewBox="0 0 24 24" width="26" height="26" fill="${fill}" aria-hidden="true"><path d="${icon.path}"/></svg>${label}</span>`,
  }
})
