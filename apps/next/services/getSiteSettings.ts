import siteSettingsFile from '../data/site-settings.json';

const getSiteSettings = (locale?: string) => {
  if (!locale) throw new Error('Locale is not provided for global site settings');

  const siteSettings =
    siteSettingsFile &&
    (siteSettingsFile as any).find((item: { __i18n_lang: string }) => item.__i18n_lang === locale);

  return siteSettings;
};

export default getSiteSettings;
