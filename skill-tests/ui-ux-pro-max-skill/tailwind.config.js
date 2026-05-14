/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#120817',
        plum: '#1b0b2e',
        violet: '#2a0f33',
        burnt: '#c84d1b',
        ember: '#e85d1c',
        amber: '#ff9f1c',
        glow: '#ffe45e',
        muted: 'rgba(255,255,255,0.72)',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain-noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 60px rgba(255, 159, 28, 0.35), 0 0 120px rgba(232, 93, 28, 0.2)',
        card: '0 24px 80px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
}
