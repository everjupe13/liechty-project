// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const toPX = values => Object.fromEntries(values.map(v => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))

const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica',
  'Segoe UI',
  'Arial',
  'sans-serif'
]

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      const typographyWithOnlySizes = {}
      for (let i = 8; i <= 100; i += 2) {
        typographyWithOnlySizes[`.text-${i}`] = { fontSize: `${i}px` }
      }

      addUtilities(typographyWithOnlySizes)
    })
  ],

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],

  corePlugins: {
    container: false
  },

  theme: {
    screens: {
      xl: { max: '1529.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '575.99px' }
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      current: 'currentColor',

      dark: {
        DEFAULT: '#1A1A21',
        text: '#1A1A21'
      },
      gray: {
        DEFAULT: '#EDEEF0',
        light: '#F1F4F9'
      },
      blue: '#1270C7',

      yellow: '#ED7622',

      milky: '#F3F1EC',
      green: '#336F3F',
      pale: '#FFDD82',
      red: '#e35050',

      button: {
        DEFAULT: '#EEEFEF',
        dark: '#E2E3E3'
      },

      tapestry: '#fcf9ed'
    },

    spacing: object0to100px,

    fontFamily: {
      sans: ['Value Sans Pro', ...fallbackSansSerifFonts],
      inter: ['Inter', ...fallbackSansSerifFonts]
    }
  }
}
