/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ciranda: {
          cream: '#FAF7F2',
          card: '#FFFDF9',
          terracotta: '#C85A32',
          'terracotta-dark': '#A6431E',
          amber: '#E5A836',
          olive: '#7A8A3A',
          brown: '#5C381E',
          dark: '#1C1917',
          muted: '#78716C',
          border: '#E7E0D6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(92, 56, 30, 0.06), 0 2px 6px -1px rgba(92, 56, 30, 0.04)',
        'elevated': '0 12px 32px -4px rgba(92, 56, 30, 0.1), 0 4px 12px -2px rgba(92, 56, 30, 0.06)',
      }
    },
  },
  plugins: [],
}
