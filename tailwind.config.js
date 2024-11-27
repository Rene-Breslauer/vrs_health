/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}'],
    theme: {
      extend: {
        fontFamily: {
          heading: 'var(--font-heading-family)',
          body: 'var(--font-body-family)',
          accent: 'var(--font-accent-family)'
        },
        fontSize: {
          sm: ['var(--font-size-sm)', '1.428'],
          base: ['var(--font-size-base)', '1.5'],
          lg: ['var(--font-size-lg)', '1.555'],
          xl: ['var(--font-size-xl)', '1.4']
        },
        colors: {
          primary: {
            800: 'var(--color_primary_800)',
            700: 'var(--color_primary_700)',
            600: 'var(--color_primary_600)',
            500: 'var(--color_primary_500)',
            400: 'var(--color_primary_400)',
            300: 'var(--color_primary_300)',
          },
          neutral: {
            800: 'var(--color_neutral_800)',
            500: 'var(--color_neutral_500)',
            400: 'var(--color_neutral_400)',
            300: 'var(--color_neutral_300)',
            100: 'var(--color_neutral_000)',
          },
          secondary: {
            500: 'var(--color_secondary_500)',
          }
        },
        transitionTimingFunction: {
          wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }
      }
    }
  }