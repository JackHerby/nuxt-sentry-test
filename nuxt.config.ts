// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@sentry/nuxt/module", "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  sentry: {
    sourceMapsUploadOptions: {
      org: "jack-herby",
      project: "nuxt-sentry-test",
      authToken: `${process.env.SENTRY_TOKEN}`,
    },
  },
});
