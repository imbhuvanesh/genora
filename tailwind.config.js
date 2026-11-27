/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reference Palette: Golden, Ultramarine Blue, Bright Gray (ZERO BLACK)
        'golden': '#39ff14',
        'ultramarine': '#3670FF',
        'bright-gray': '#EFEFEF',
        'deep-blue': '#0C2B80',
        'cobalt': '#2256DB',
        'pure-white': '#FFFFFF',

        // Digital Agency Theme Aliases (Guaranteed No Black)
        'dark-bg': '#0C2B80',
        'dark-card': '#1E3A8A',
        'dark-elevated': '#172554',
        'dark-border': 'rgba(255, 255, 255, 0.15)',
        'dark-border-hover': 'rgba(255, 255, 255, 0.35)',
        'muted-text': '#93C5FD',
        'subtle-text': '#60A5FA',

        'evergreen': '#0C2B80',
        'chinese-black': '#171717',
        'sunny-lime': '#39ff14',
        'butter-white': '#EFEFEF',
        'primary-blue': '#3670FF',
        'royal-blue': '#3670FF',
        'deep-navy': '#0C2B80',
        'neon-lime': '#39ff14',
        'creamy-avocado': '#39ff14',
        'primary-black': '#000000',
        'soft-grey': '#EFEFEF',
        'secondary-blue': '#2256DB',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        dmsans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        inter: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        archivo: ['"DM Sans"', 'system-ui', 'sans-serif'],
        manrope: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(54, 112, 255, 0.35)',
        'card': '0 10px 30px -10px rgba(12, 43, 128, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'card-hover': '0 20px 45px -10px rgba(12, 43, 128, 0.35), 0 0 0 1px rgba(54, 112, 255, 0.2)',
        'button-glow': '0 0 25px rgba(57, 255, 20, 0.4)',

        // Layered Soft Shadows for Containers
        'card-soft': '0 10px 30px -5px rgba(12, 43, 128, 0.08), 0 1px 3px rgba(12, 43, 128, 0.04)',
        'main-frame': '0 25px 60px -15px rgba(54, 112, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15)',
        'nav-container': '0 8px 32px 0 rgba(12, 43, 128, 0.35), 0 1px 2px 0 rgba(255, 255, 255, 0.25) inset',
        'pill-blue': '0 10px 25px -5px rgba(54, 112, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
        'pill-neon': '0 8px 25px -4px rgba(57, 255, 20, 0.5), 0 0 15px rgba(57, 255, 20, 0.3)',
        'bubble-neon': '0 12px 35px -5px rgba(57, 255, 20, 0.45), 0 4px 12px rgba(12, 43, 128, 0.08)',
        'badge-neon': '0 15px 35px -5px rgba(57, 255, 20, 0.4), 0 0 20px rgba(57, 255, 20, 0.2)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
