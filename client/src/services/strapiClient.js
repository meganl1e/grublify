// // src/services/strapiClient.js
import { strapi } from '@strapi/client';

export const client = strapi({ baseURL: `${import.meta.env.VITE_STRAPI_URL}` });

// import { createClient } from '@strapi/client';

// export const client = createClient({ baseURL: import.meta.env.VITE_STRAPI_URL });
