/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screen: {
      'xs': '400px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

