import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available within server-side
    databaseUrl: process.env.DATABASE_URL,
    shaSecret: process.env.SHA_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {},
  },
  modules: [
    '@prisma/nuxt',
  ],
  prisma: {
    installCLI: true,
    installClient: true,
    generateClient: false,
    formatSchema: true,
    installStudio: true,
    autoSetupPrisma: true,
  },
})
