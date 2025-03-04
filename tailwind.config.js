/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_layouts/**/*.{html,js}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              color: theme('colors.white')
            },
            code: {
              color: theme('colors.white')
            },
            strong: {
              color: theme('colors.white')
            },
            ol: {
              color: theme('colors.white')
            },
            ul: {
              color: theme('colors.white')
            },
            h1: {
              color: theme('colors.white')
            },
            h2: {
              color: theme('colors.white')
            },
            h3: {
              color: theme('colors.white')
            },
            h4: {
              color: theme('colors.white')
            },
            a: {
              color: theme('colors.moonstone'),
              '&:hover': {
                color: theme('colors.moonstone'),
              }
            }
          }
        }
      })
    },
    colors: {
      'orange': '#EE6C29',
      'jet': "#282B2B",
      'moonstone': "#7AA6B3",
      'white': "#FFFFFF",
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

