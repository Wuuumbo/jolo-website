/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        coral: '#FF8C6B',
        'coral-dark': '#E8704F',
        yellow: '#FFD166',
        sage: '#6BCB77',
        'sage-dark': '#52A85D',
        brown: '#3D2B1F',
        'brown-light': '#7A5C4F',
        'peach': '#FFE5D9',
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out infinite 1s',
        'float-delay2': 'float 3s ease-in-out infinite 2s',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pulse-coral': 'pulseCoral 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.6) translateY(20px)' },
          '70%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        pulseCoral: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,140,107,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255,140,107,0)' },
        },
      },
    },
  },
  plugins: [],
};
