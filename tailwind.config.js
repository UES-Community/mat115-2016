/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0b0c0e',
        abyss: '#0e111b',
        'deep-sea': '#0d172b',
        'cobalt-panel': '#12244f',
        'frosted-lilac': '#85a6e9',
        'signal-blue': '#2862d7',
        'pulse-violet': '#305fbd',
        'aurora-purple': '#625fff',
        'plasma-pink': '#ff7dda',
        quartz: '#ffffff',
        ash: '#abaebb',
        mist: '#c7c9d1',
        slate: '#3c3f44',
        'obsidian-edge': '#172540',
        inkline: '#151e32',
        'sapphire-hairline': '#24375a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        figtree: ['var(--font-figtree)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        nav: '8px',
        tags: '9999px',
        cards: '12px',
        small: '2px',
        inputs: '8px',
        buttons: '9999px',
      },
      boxShadow: {
        md: 'rgba(0, 0, 0, 0.2) 0px 3px 16px 0px',
        xl: 'rgba(0, 0, 0, 0.5) 0px 4px 30px 0px',
        'xl-2': 'rgba(0, 0, 0, 0.34) 0px 20px 35px 0px, rgba(0, 0, 0, 0.25) 0px 4px 13px 0px',
        'md-2': 'rgba(255, 255, 255, 0.35) 0px 2px 14px 0px',
        'xl-3': 'rgba(0, 0, 0, 0.35) 0px 20px 34px 0px',
        subtle: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
};
