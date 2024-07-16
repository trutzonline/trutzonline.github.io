/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_layouts/**/*.{html,js}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.trutzonline-gray.dark'),
            a: {
              color: theme('colors.trutzonline'),
              '&:hover': {
                color: theme('colors.trutzonline'),
              },
            },
            blockquote: {
              color: theme('colors.trutzonline-gray.dark')
            },
            h1: {
              color: theme('colors.trutzonline-gray.dark')
            },
            h2: {
              color: theme('colors.trutzonline-gray')
            }
          }
        }
      })
    },
    colors: {
      'trutzonline': '#ff4f00',
      'trutzonline-gray': {
        dark: '#4f4f4f',
        DEFAULT: '#a2a2a2',
        light: '#eaeaea',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

