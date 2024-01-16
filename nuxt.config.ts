// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@kgierke/nuxt-basic-auth'],
  basicAuth: {
    enabled: true,
    users: [
      {
        username: "admin",
        password: "admin",
      },
    ],
    // Optional: Whitelist routes
    allowedRoutes: [
        "/pub",
      "/pub/awardList",
      "/pub/search",
      "/pub/winnerList",
        "/api/awards",
      "/api/people",
        "/api/winners"
    ],
  }
});


