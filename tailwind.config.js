/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#6F2DBD',
          light: '#A663CC',
          dark: '#5A2399',
        },
        navy: {
          dark: '#171123',
        },
        white: {
          off: '#FBFBFB',
        },
        text: {
          primary: '#171123',
          secondary: '#4A4458',
          tertiary: '#8B8696',
        },
        border: {
          light: '#E5E0EB',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        header: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        serif: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        display: ['Times New Roman', 'Times', 'Georgia', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}













