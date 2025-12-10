/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
        },
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        bg: {
          primary: '#0f172a',
          secondary: '#1e293b',
          card: '#1e293b',
          hover: '#334155',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        },
        border: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'custom': '0 10px 40px rgba(0, 0, 0, 0.3)',
        'card': '0 20px 60px rgba(99, 102, 241, 0.3)',
        'button': '0 10px 30px rgba(99, 102, 241, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'modal-slide-up': 'modalSlideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        modalSlideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-100': {
          'animation-delay': '0.1s',
        },
        '.animation-delay-200': {
          'animation-delay': '0.2s',
        },
        '.animation-delay-300': {
          'animation-delay': '0.3s',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
