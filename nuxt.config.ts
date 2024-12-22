// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-12-22',
  app:{
    head:{
      title:'Nuxt Dojo',
      meta:[
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link:[
        {rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=shopping_cart"}
        
      ]
    }
  }

})