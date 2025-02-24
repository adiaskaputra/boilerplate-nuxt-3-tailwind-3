export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
    'nuxt-security',
    '@nuxt/eslint',
  ],
  imports: {
    dirs: ['composables/**'],
  },
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      title: 'Boilerplate',
      link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.png' }],
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
      ],
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transition.css',
    '~/assets/css/main.css',
  ],
  devServer: {
    port: 8000,
  },
  compatibilityDate: '2025-01-09',
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: false,
        strictNullChecks: true,
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'postcss-lighten-darken': {},
      'autoprefixer': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
        quoteProps: 'consistent-as-needed',
        commaDangle: 'always-multiline',
        blockSpacing: true,
        arrowParens: true,
      },
    },
  },
  security: {
    nonce: true,
    rateLimiter: false,
    csrf: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          // self             => Fallback value, will be ignored by most modern browsers (level 3)
          // unsafe-inline    => Fallback value, will be ignored by almost any browser (level 2)
          // strict-dynamic   => Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          // nonce-{{nonce}}  => Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
          '\'self\'',
          '\'unsafe-inline\'',
          '\'strict-dynamic\'',
          '\'nonce-{{nonce}}\'',
        ],
        'style-src': [
          // self           => Enables loading of stylesheets hosted on same origin
          // unsafe-inline  => Recommended default for most Nuxt apps
          '\'self\'',
          'fonts.googleapis.com',
          '\'unsafe-inline\'',
        ],
        // img-src => Add relevant https://... sources if you load images from external sources
        'base-uri': ['\'none\''],
        'img-src': ['\'self\'', 'data:'],
        'font-src': ['\'self\'', 'fonts.gstatic.com'],
        'object-src': ['\'none\''],
        'script-src-attr': ['\'none\''],
        'frame-ancestors': ['\'self\''],
        'upgrade-insecure-requests': true,
      },
      permissionsPolicy: {
        camera: ['self'],
      },
    },
  },
})
