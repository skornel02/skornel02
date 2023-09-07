/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background": "var(--color-background)",
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "title": "var(--color-title)",
        "text": "var(--color-text)",
      },
      width: {
        'sideBar': '17rem !important',
      },
      height: {        
        'topBar': '5rem',
      },
      padding: {
        'sideBar': '17rem !important',
        'topBar': '5rem',
      },
      fontSize: {
        'pageTitle': '6rem',
        'pageSection': '3.3rem',
      },
      lineHeight: {
        'pageTitle': '5.5rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [{
      "light": {
        ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        "primary": "#2e74b5",
        "secondary": "#1f3864",
        "base-100": "#FFFFFF",
      }
    },
    {
      "dark": {
        ...require('daisyui/src/colors/themes')['[data-theme=black]'],
        "primary": "#690092",
        "secondary": "#c123ff",
        "base-100": "#000000",
      }
    }],
    darkTheme: "skDark",
  }
}
