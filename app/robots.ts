import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ais-dev-coqgkbgkxkwvtu65zum73l-495551996573.europe-west2.run.app/sitemap.xml',
  };
}
