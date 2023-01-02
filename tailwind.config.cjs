/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [{
      "skLight": {
        "primary": "#2e74b5",
        "secondary": "#1f3864",
        "accent": "#3b3838",
        "neutral": "#868e96",
        "base-100": "#FFFFFF",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    },
    {
      "skDark": {
        "primary": "#690092",
        "secondary": "#c123ff",
        "accent": "#ffffff",
        "neutral": "#c1bdc2",
        "base-100": "#000000",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    }],
    darkTheme: "skDark",
  }
}
