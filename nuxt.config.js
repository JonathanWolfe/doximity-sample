
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~assets/images/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  plugins: [],
  buildModules: [],
  modules: [
    '@nuxtjs/apollo'
  ],
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql',
      }
    }
  },
  build: {
    extend (config, ctx) {
    }
  },
  css: [
    '@/assets/stylesheets/application.sass'
  ]
};
