module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: '#000000',
          secondary: '#ffffff',
          accent: '#F5F5DC', // Ivory
          'british-racing-green': '#004225', // British Racing Green hex code
          'dark-green': '#002d1f'
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }

