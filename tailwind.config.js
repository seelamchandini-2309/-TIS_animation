/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          navy: {
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#627d98',
            500: '#486581',
            600: '#334e68',
            700: '#243b53',
            800: '#102a43',
            900: '#07162c',
            950: '#030c1b',
          },
          gold: {
            50: '#fdfbf2',
            100: '#faf4df',
            200: '#f4e5b6',
            300: '#edd285',
            400: '#e5be56',
            500: '#d4af37', // signature gold
            600: '#b89228',
            700: '#947220',
            800: '#775a1e',
            900: '#644b1c',
          },
          maroon: {
            500: '#7a1c1c',
            600: '#661414',
            700: '#4e0c0c',
            800: '#3b0606',
          },
          emerald: {
            500: '#0f766e',
            600: '#115e59',
            700: '#134e4a',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.8))' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
