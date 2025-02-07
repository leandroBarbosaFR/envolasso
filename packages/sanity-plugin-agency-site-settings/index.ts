import { definePlugin } from 'sanity';
// ===============================================================
// Documents
// ===============================================================
import siteSettings from './schemas/documents/site-settings';
// ===============================================================
// Objects
// ===============================================================
import pageNotFound404 from './schemas/objects/page-not-found-404';
// ===============================================================
// SEO config.
// ===============================================================
import seoGlobalSettings from './schemas/objects/seo-global-settings';
import seoSiteSettings from './schemas/objects/seo-site-setings';

const agencySiteSettings = definePlugin(() => ({
  schema: {
    types: [
      // ===============================================================
      // Documents
      // ===============================================================
      siteSettings,
      // ===============================================================
      // Objects
      // ===============================================================
      pageNotFound404,
      // ===============================================================
      // SEO config.
      // ===============================================================
      seoGlobalSettings,
      seoSiteSettings
    ]
  }
}));

export default agencySiteSettings;
