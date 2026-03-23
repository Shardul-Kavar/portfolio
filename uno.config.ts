// uno.config.ts
import { defineConfig, presetWind3, presetWebFonts } from 'unocss';

export default defineConfig({
  darkMode: 'class',
  content: {
    filesystem: [
      // Narrow scope to specific directories
      'src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      'src/components/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      'src/pages/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      'src/layouts/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  theme: {
    boxShadow: {
      custom: `3px 3px 0`,
      'custom-hover': `1px 1px 0`,
    },
    fontFamily: {
      sans: ['CabinetGrotesk', 'Satoshi'],
    },
    gridTemplateRows: {
      'auto-250': 'repeat(auto-fill, 250px)',
    },
    gridTemplateColumns: {
      '4-minmax': 'repeat(4, minmax(150px, 1fr))',
    },
    colors: {
      // gray: {
      //   50: '#FFFFFF', // White
      //   100: '#F5F5F7', // Apple's light gray
      //   200: '#E8E8ED', // Light gray for borders
      //   300: '#D2D2D7', // Medium gray for borders
      //   400: '#A1A1A6', // Gray for text
      //   500: '#85858B', // Darker gray for text
      //   600: '#636366', // Even darker gray for text
      //   700: '#4F4F52',
      //   800: '#3A3A3C',
      //   900: '#1D1D1F', // Black for text
      // },
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      darkslate: {
        50: '#3D3D3D',
        100: '#2C2C2C',
        200: '#262626',
        300: '#202020',
        400: '#1A1A1A',
        500: '#171717',
        600: '#141414',
        700: '#111111',
        800: '#0E0E0E',
        900: '#0B0B0B',
      },
      'accent-light': {
        100: '#E1F0F3',
        200: '#C4E1E8',
        300: '#A6D2DC',
        400: '#89C3D1',
        500: '#135c74',
        600: '#105166',
        700: '#0D4558',
        800: '#0A3A4A',
        900: '#072E3C',
      },
      'accent-dark': {
        100: '#F9CDD3',
        200: '#F3A3AA',
        300: '#EC7981',
        400: '#E64F59',
        500: '#E63946',
        600: '#CF2F3D',
        700: '#B82534',
        800: '#A01B2B',
        900: '#891321',
      },
    },
  },
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: ['Cabinet Grotesk', 'Satoshi'],
        serif: 'Zodiak',
      },
    }),
  ],
});
