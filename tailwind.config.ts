import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#F0E8D8',
        wood: '#8B6914',
        'wood-light': '#C49A2A',
        'wood-dark': '#5C4409',
        sage: '#5C7A5C',
        'sage-light': '#7A9E7A',
        charcoal: '#1F2937',
        sand: '#D4B896',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
