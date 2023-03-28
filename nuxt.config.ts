/// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { resolve } from 'path';
export default defineNuxtConfig({
  
  app: {
    head: {
      meta: [
        
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [

        { src: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js' }
      ],
      link: [
    
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css' }
      ]
    
    }
  },
  
  alias: {
    'css': resolve(__dirname, './assets/css'),
  },
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.css',
    '@/node_modules/animate.css/animate.min.css',
    'css/allmystyle.css',
    'css/jquery.mobile-1.4.5.min.css',
    'css/leaflet.css',
    'css/listview-grid.css',
    'css/magic.min.css',
    'css/MarkerCluster.css',
    'css/MarkerCluster.Default.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '@/plugins/bootstrap.js', mode: 'client' },
    { src: '@/static/leaflet.js', mode: 'client' },
    { src: '@/plugins/wow.js', mode: 'client' },
  
    
  ], 
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  
})