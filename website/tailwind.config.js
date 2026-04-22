import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hunter: '#1a3325',
        forest: '#0d1f14',
        ivory: '#f7f2ea',
        cream: '#eee8d8',
        gold: '#c4a96b',
        'text-primary': '#1a2e1a',
        'text-muted': '#5a6e58',
        border: '#c8bfa8',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config