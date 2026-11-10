// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Narayan Kartikeyan C',
  shortName: 'Narayan',
  initials: 'NK',
  role: 'Full Stack Developer',
  location: 'Bengaluru, India',
  email: 'nnk9707@gmail.com',
  phone: '+91 9686031673',
  linkedin: 'https://www.linkedin.com/in/narayan-kartikeyan-c-668343221',
  linkedinHandle: 'in/narayan-kartikeyan-c-668343221',
  // Photo lives at /public/profile.jpg — the initials show if it's missing.
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
  // How the photo is framed in the hero circle: zoom level + focal point (0–1).
  photoFrame: { zoom: 1.7, focusX: 0.6, focusY: 0.36 },
  tagline:
    'I build scalable web applications and turn complex business requirements into practical, maintainable software.',
  summary:
    'Full Stack Developer with 3+ years of experience building scalable web applications and business-oriented software. I work across Vue.js, Nuxt.js, Node.js, Express.js, MongoDB and PostgreSQL — shipping end-to-end B2B e-commerce workflows, RESTful APIs, payment integrations, dynamic pricing engines and shipment management systems.',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years of experience' },
  { value: 2, suffix: '', label: 'Companies' },
  { value: 3, suffix: '', label: 'Products shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
]

export type SkillGroup = { title: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Mongoose'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Supabase'] },
  { title: 'Integrations & Services', items: ['Stripe', 'Firebase', 'WhatsApp Business API', 'Meta Graph API'] },
  { title: 'Tools & Version Control', items: ['Git', 'GitHub', 'Bitbucket'] },
]

export type Experience = {
  company: string
  note?: string
  role: string
  period: string
  location: string
  current?: boolean
  intro: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'TextTree Technologies',
    note: 'Unit of Electricway',
    role: 'Full Stack Developer',
    period: 'Dec 2024 — Present',
    location: 'Bengaluru',
    current: true,
    intro:
      'Building Traderz, a multi-vendor B2B marketplace for construction and industrial products — electrical cables, pumps and other equipment.',
    points: [
      'Develop and maintain end-to-end marketplace functionality across Vue.js, Nuxt.js, Node.js, Express.js, MongoDB and Mongoose.',
      'Build customer and admin portals covering the full order lifecycle: cart, negotiations, checkout, Stripe payments, processing and fulfilment.',
      'Designed a dynamic Price Engine — a dedicated service layer that calculates customer-specific pricing from loyalty tiers and other business factors.',
      'Architected the complete Shipment Management Module: shipment creation, vendor-location pickups, logistics coordination, tracking and final delivery.',
      'Implemented Firebase integrations and WhatsApp notification services for real-time updates and automated customer communication.',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Firebase', 'WhatsApp API'],
  },
  {
    company: 'Vocaway Education Pvt. Ltd',
    role: 'Full Stack Developer',
    period: 'Aug 2023 — Sep 2024',
    location: 'Bengaluru',
    intro: 'Built mobile and web products, data pipelines and the team’s engineering workflow.',
    points: [
      'Planned and implemented mobile and web applications with Flutter to improve the user experience.',
      'Developed web scraping solutions with Scrapy to extract data from multiple websites and load it into the product database.',
      'Led the rollout of Git and GitHub to streamline collaboration across development teams.',
    ],
    stack: ['Flutter', 'Dart', 'Supabase', 'Scrapy', 'Git'],
  },
]

export type Project = {
  name: string
  kicker: string
  description: string
  highlights: string[]
  stack: string[]
  link?: { label: string; href: string }
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Traderz',
    kicker: 'Multi-vendor B2B marketplace · TextTree Technologies',
    description:
      'A scalable B2B e-commerce marketplace connecting multiple vendors and customers across construction and industrial product categories.',
    highlights: [
      'Customer & admin apps',
      'Customer–vendor negotiations',
      'Dynamic Price Engine',
      'Shipment workflows',
      'Stripe payments',
      'WhatsApp & Firebase notifications',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Stripe', 'Firebase', 'WhatsApp Graph API'],
    featured: true,
  },
  {
    name: 'RetroQuest',
    kicker: 'Personal project',
    description:
      'A responsive retro gaming platform that runs classic NES, Game Boy, Game Boy Advance and Sega Genesis titles right in the browser.',
    highlights: [
      'In-browser emulation via EmulatorJS',
      'Save / load progress with local storage',
      'External gamepad support',
      'Responsive on desktop & mobile',
    ],
    stack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'EmulatorJS', 'JavaScript'],
    link: { label: 'View project', href: 'https://lnkd.in/gR47mr6j' },
  },
  {
    name: 'Convene',
    kicker: 'Mobile platform · Vocaway Education',
    description:
      'A Flutter app empowering rural communities — one place for rentals, crop tracking, community chat, local jobs, a freelancer marketplace and village announcements.',
    highlights: ['Rental service', 'Crop tracker', 'Community chat', 'Job search & freelancing'],
    stack: ['Flutter', 'Dart', 'Supabase'],
  },
]

export const education = [
  {
    year: '2023',
    title: 'B.E. in Computer Science and Engineering',
    school: 'Ballari Institute of Technology and Management',
    score: 'CGPA 7.8',
  },
  {
    year: '2019',
    title: 'Pre-University Course',
    school: 'Sri Chaitanya Pre-University College, Ballari',
    score: '75.38%',
  },
  {
    year: '2017',
    title: 'SSLC / 10th Standard',
    school: 'Sri Chaitanya Techno School, Ballari',
    score: '84.48%',
  },
]
