import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available within server-side
    databaseUrl: process.env.DATABASE_URL,
    shaSecret: process.env.SHA_SECRET,
    logto: {
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      appSecret: process.env.NUXT_LOGTO_APP_SECRET,
      cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
    },
    // Keys within public, will be also exposed to the client-side
    public: {},
  },
  modules: [
    '@prisma/nuxt',
    '@logto/nuxt',
  ],
  prisma: {
    installCLI: true,
    installClient: true,
    generateClient: false,
    formatSchema: true,
    installStudio: true,
    autoSetupPrisma: true,
  },
  logto: {
    customRedirectBaseUrl: 'http://localhost:3000',
    pathnames: {
      signIn: '/auth/sign-in',
      signOut: '/auth/sign-out',
      callback: '/auth/callback',
    },
  },
})
