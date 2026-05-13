/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9e0',
          100: '#fff0b8',
          200: '#ffe585',
          300: '#ffd852',
          400: '#ffce26',
          DEFAULT: '#ffc80b',
          500: '#ffc80b',
          600: '#e6b300',
          700: '#b38a00',
          800: '#806300',
          900: '#4d3b00',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e6e6e8',
          200: '#c9c9cd',
          300: '#9c9ca5',
          400: '#6b6b76',
          500: '#4a4a55',
          600: '#2f2f38',
          700: '#1e1e25',
          800: '#141418',
          900: '#0a0a0d',
          950: '#050507',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(255, 200, 11, 0.45)',
        'glow-sm': '0 0 24px -6px rgba(255, 200, 11, 0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(5,5,7,0) 0%, rgba(5,5,7,1) 90%)',
        'radial-brand':
          'radial-gradient(ellipse at top, rgba(255,200,11,0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        marquee: 'marquee 30s linear infinite',
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
