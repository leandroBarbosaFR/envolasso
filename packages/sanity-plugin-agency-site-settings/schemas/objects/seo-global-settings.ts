import { FiUsers } from 'react-icons/fi';

export default {
  name: 'siteSettings.seoGlobalSettings',
  title: 'Global SEO Settings',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'genralSetings',
      title: 'General Settings',
      default: true
    }
  ],
  fields: [
    // ===============================================================
    // Genral Settings
    // ===============================================================
    {
      title: 'SEO Title Source',
      name: 'titleSource',
      type: 'string',
      description:
        'Make sure your title tag is explicit and contains your most important keywords. Be sure that each page has a unique title tag.',
      group: 'genralSetings'
    },
    {
      title: 'Site Name Position',
      name: 'siteNamePosition',
      type: 'string',
      options: {
        list: [
          { title: 'Before', value: 'before' },
          { title: 'After', value: 'after' }
        ]
      },
      description:
        'Make sure your title tag is explicit and contains your most important keywords. Be sure that each page has a unique title tag.',
      group: 'genralSetings'
    },
    {
      title: 'SEO Description Source',
      name: 'descriptionSource',
      type: 'text',
      rows: 4,
      description:
        'SEO descriptions allow you to influence how your web pages are described and displayed in search results. Ensure that all of your web pages have a unique meta description that is explicit and contains your most important keywords.',
      group: 'genralSetings'
    },
    {
      title: 'SEO Keywords Source',
      name: 'KeywordsSource',
      type: 'string',
      description: 'Google ignores SEO Keywords tag; though other search engines do look at it.',
      group: 'genralSetings'
    },
    {
      title: 'SEO Image Source',
      name: 'imageSource',
      type: 'image',
      description:
        'This is the image that will be used for display as the global website brand, as well as on Twitter Cards and Facebook OpenGraph that link to the website, if they are not specified.',
      group: 'genralSetings'
    },
    {
      title: 'SEO Image Description Source',
      name: 'imageSourceDescription',
      type: 'text',
      rows: 4,
      description:
        'A text description of the image conveying the essential nature of an image to users who are visually impaired.',
      group: 'genralSetings'
    },
    {
      title: 'Canonical URL',
      name: 'canonicalUrl',
      type: 'url',
      description:
        'The search engine friendly URL that you want the search engines to treat as authoritative.',
      group: 'genralSetings'
    }
  ],
  initialValue: {}
};
