export const endpoint =
  process.env.REACT_APP_ENV_VAR === "production"
    ? process.env.REACT_APP_ENDPOINT_PRODUCTION
    : process.env.REACT_APP_ENV_VAR === "preview"
    ? process.env.REACT_APP_ENDPOINT_STAGING
    : process.env.REACT_APP_ENDPOINT_LOCAL;
