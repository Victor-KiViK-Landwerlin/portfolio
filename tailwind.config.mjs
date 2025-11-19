/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kivik-green': '#057020',
        'kivik-light': '#C1DBC7',
        'kivik-cream': '#F5F5F0',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        kivik: {
          "primary": "#057020",
          "secondary": "#C1DBC7",
          "accent": "#057020",
          "neutral": "#000000",
          "base-100": "#F5F5F0",
          "info": "#057020",
          "success": "#057020",
          "warning": "#C1DBC7",
          "error": "#ff0000",
        },
      },
    ],
  },
}
