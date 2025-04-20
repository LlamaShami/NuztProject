import { config as loadEnv } from 'dotenv'
loadEnv()

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      // only needed if you choose WeatherAPI.com
      weatherApiKey: process.env.NUXT_PUBLIC_WEATHERAPI_KEY,
    }
  },

  compatibilityDate: '2025-04-20'
})