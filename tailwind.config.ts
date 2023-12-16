/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
  
        // md: '1rem',
        lg: '2rem',
     
      },
      screens: {
        sm: '100%',
        lg: '1128px',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'sans-serif'],
      },
      colors: {
        // shared colors
        'primary-color': '#CB76FF',
        'white-color': '#F6F6F6',
        'black-color': '#151515',

        // light colors
        'bg-color-light': '#FFFFFF',
        'secondary-color-light': '#ECECEC',
        'accent-color-light': '#D6D6D6',

        // dark colors
        'bg-color-dark': '#131417',
        'secondary-color-dark': '#1C1F27',
        'accent-color-dark': '#262639',
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
