import { defineConfig } from 'astro/config';

// Same URLs as the old WordPress site (with trailing slash), so old links keep working.
// SITE_BASE is only set for the temporary GitHub address (e.g. /saronpaz-site); on saronpaz.com it is "/".
export default defineConfig({
  site: 'https://saronpaz.com',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
