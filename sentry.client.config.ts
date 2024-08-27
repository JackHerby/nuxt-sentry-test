import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://5dfea2ea9fc82c9ce14b4f54c83109c8@o4507850936614912.ingest.de.sentry.io/4507851022139472",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

