/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#120817',
        deepPurple: '#1b0b2e',
        plum: '#2a0f33',
        burnt: '#c84d1b',
        ember: '#e85d1c',
        amber: '#ff9f1c',
        accent: '#ffe45e',
        muted: 'rgba(255,255,255,0.72)',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% 38%, rgba(232,93,28,0.55) 0%, rgba(255,159,28,0.22) 32%, rgba(42,15,51,0.35) 58%, rgba(18,8,23,0.95) 100%)',
        'night-fade': 'linear-gradient(180deg, rgba(18,8,23,0.2) 0%, rgba(18,8,23,0.92) 100%)',
      },
      boxShadow: {
        glow: '0 0 80px rgba(255,159,28,0.35), 0 0 140px rgba(232,93,28,0.2)',
        'glow-sm': '0 0 40px rgba(255,228,94,0.25)',
      },
    },
  },
  plugins: [],
}
