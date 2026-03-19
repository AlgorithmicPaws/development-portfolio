/**
 * Official brand hex colors sourced from Simple Icons (simpleicons.org).
 * `text` is a readable foreground — darkened manually when the brand color
 * is too light to pass contrast on a tinted background.
 */
const techMap: Record<string, { hex: string; text?: string }> = {
  // — Frontend —
  'React':         { hex: '#61DAFB', text: '#0a6e8a' },
  'Vue':           { hex: '#4FC08D', text: '#1a5c3a' },
  'Vue.js':        { hex: '#4FC08D', text: '#1a5c3a' },
  'TypeScript':    { hex: '#3178C6' },
  'JavaScript':    { hex: '#F7DF1E', text: '#4d3f00' },
  'Astro':         { hex: '#FF5D01' },
  'Next.js':       { hex: '#000000' },
  'Tailwind':      { hex: '#06B6D4', text: '#064e5e' },
  'TailwindCSS':   { hex: '#06B6D4', text: '#064e5e' },
  'Vite':          { hex: '#646CFF' },
  'Svelte':        { hex: '#FF3E00' },
  'Angular':       { hex: '#DD0031' },

  // — Backend —
  'FastAPI':       { hex: '#009688' },
  'Node.js':       { hex: '#339933' },
  'Python':        { hex: '#3776AB' },
  'Django':        { hex: '#092E20' },
  'Express':       { hex: '#000000' },
  'Go':            { hex: '#00ADD8', text: '#004d61' },
  'Rust':          { hex: '#CE422B' },

  // — Databases —
  'PostgreSQL':    { hex: '#4169E1' },
  'MySQL':         { hex: '#4479A1' },
  'MongoDB':       { hex: '#47A248' },
  'Redis':         { hex: '#DC382D' },
  'SQLite':        { hex: '#003B57' },
  'Supabase':      { hex: '#3ECF8E', text: '#0d5c3a' },

  // — DevOps / Cloud —
  'Docker':        { hex: '#2496ED' },
  'Kubernetes':    { hex: '#326CE5' },
  'AWS':           { hex: '#FF9900', text: '#7a4400' },
  'Git':           { hex: '#F05032' },
  'GitHub':        { hex: '#181717' },
  'Linux':         { hex: '#FCC624', text: '#5a4200' },

  // — AI / ML —
  'AI':            { hex: '#7C3AED' },
  'QLoRA':         { hex: '#6D28D9' },
  'PyTorch':       { hex: '#EE4C2C' },
  'TensorFlow':    { hex: '#FF6F00', text: '#5a2c00' },
  'OpenAI':        { hex: '#412991' },

  // — Other —
  '3D Modeling':   { hex: '#F5A623', text: '#5a3500' },
}

function hexToRgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }
}

export interface TagStyle {
  background: string
  color: string
  border: string
}

/** Fallback cycles through brand palette when a tech isn't in the map */
const fallbackColors: TagStyle[] = [
  { background: 'rgba(47,76,121,0.1)',  color: 'rgb(47,76,121)',  border: 'rgba(47,76,121,0.25)'  },
  { background: 'rgba(200,35,55,0.1)',  color: 'rgb(200,35,55)',  border: 'rgba(200,35,55,0.25)'  },
  { background: 'rgba(224,98,54,0.1)',  color: 'rgb(175,70,25)',  border: 'rgba(224,98,54,0.25)'  },
  { background: 'rgba(215,171,97,0.15)', color: 'rgb(135,100,35)', border: 'rgba(215,171,97,0.35)' },
]

export function getTagStyle(tag: string, fallbackIndex = 0): TagStyle {
  const entry = techMap[tag]
  if (!entry) return fallbackColors[fallbackIndex % fallbackColors.length]

  const { r, g, b } = hexToRgb(entry.hex)
  const textColor = entry.text ?? entry.hex

  return {
    background: `rgba(${r},${g},${b},0.1)`,
    color: textColor,
    border: `rgba(${r},${g},${b},0.28)`,
  }
}
