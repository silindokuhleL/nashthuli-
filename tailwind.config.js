/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F2',
          100: '#F5EDD6',
          200: '#EDE0C4',
          300: '#E0CFA8',
        },
        charcoal: {
          700: '#3D3D3D',
          800: '#2C2C2C',
          900: '#1A1A1A',
        },
        wood: {
          300: '#D4A857',
          400: '#C4922A',
          500: '#B8860B',
          600: '#8B6914',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
};
