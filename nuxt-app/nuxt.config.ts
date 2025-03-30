// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-12-17',

  css: ['~/assets/index.css'],

  modules: ['@nuxtjs/sanity', [
    '@nuxtjs/google-fonts',
    {
      families: {
        'IBM Plex Mono': [500, 700],
        Inter: [500, 700, 800],
        'PT Serif': [400, 700],
        download: true,
        inject: true,
      },
    },
  ], '@nuxtjs/tailwindcss', 'shadcn-nuxt'],

  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
    },
  },

})