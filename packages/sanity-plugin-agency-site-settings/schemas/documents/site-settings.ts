import { FiUsers } from 'react-icons/fi';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  // hidden: ({ currentUser }) => {
  //   return !currentUser.roles.find(({ name }) => name === 'administrator');
  // },
  groups: [
    {
      name: 'genralSetings',
      title: 'General Settings',
      default: true
    },
    {
      name: 'seoGlobalSettings',
      title: 'SEO General Settings'
    },
    {
      name: 'seoSiteSettings',
      title: 'SEO Site Settings'
    },
    {
      name: 'pageNotFound404Configuration',
      title: 'Page non trouvée 404 Configuration'
    }
  ],
  fields: [
    // ===============================================================
    // Genral Settings
    // ===============================================================
    {
      title: 'Nom du site web',
      name: 'websiteName',
      type: 'string',
      group: 'genralSetings'
    },
    {
      title: 'URL du site Web',
      name: 'websiteUrl',
      type: 'string',
      group: 'genralSetings'
    },
    // ===============================================================
    // Page Not Found 404
    // ===============================================================
    {
      title: 'Page non trouvée 404',
      name: 'pageNotFound404',
      type: 'siteSettings.pageNotFound404',
      group: 'pageNotFound404Configuration'
    },
    // ===============================================================
    //  SEO
    // ===============================================================
    {
      title: 'SEO seoGlobalSettings',
      name: 'seoGlobalSettings',
      type: 'siteSettings.seoGlobalSettings',
      group: 'seoGlobalSettings'
    },
    {
      title: 'SEO seoSiteSetings',
      name: 'seoSiteSettings',
      type: 'siteSettings.seoSiteSettings',
      group: 'seoSiteSettings',
      hidden: ({ parent }: any) => parent?.isNavAccountEnabled !== true
    }
  ]
};
