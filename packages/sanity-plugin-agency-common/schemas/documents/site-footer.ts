import { FiUsers } from 'react-icons/fi';

export default {
  name: 'siteFooter',
  title: 'Footer',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'setings',
      title: 'Paramètres',
      default: true
    },
    {
      name: 'socialMediaNavigaiton',
      title: 'Navigation réseaux sociaux'
    },
    {
      name: 'navigation',
      title: 'Navigation'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'newsletter',
      title: 'Formulaire de newsletter'
    },
    {
      name: 'copyrightInfo',
      title: 'Copyright Information'
    }
  ],
  fields: [
    // Settings
    {
      title: 'Layout Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: [{ title: 'Default', value: 'default' }]
      },
      group: 'setings',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Activer la navigation des réseaux sociaux',
      name: 'isSocialNavEnabled',
      type: 'boolean',
      group: 'socialMediaNavigaiton'
    },
    {
      title: 'Navigation des réseaux sociaux',
      name: 'navigationSocial',
      type: 'common.socialMediaNavigation',
      hidden: ({ parent }: any) => parent?.isSocialNavEnabled !== true,
      group: 'socialMediaNavigaiton'
    },
    // navigation
    {
      title: 'Activer la navigation du pied de page',
      name: 'isNavFooterEnabled',
      type: 'boolean',
      group: 'navigation'
    },
    {
      title: 'Footer Navigation',
      name: 'navigationFooter',
      type: 'common.navigation',
      hidden: ({ parent }: any) => parent?.isNavFooterEnabled !== true,
      group: 'navigation'
    },
    // Newsletter
    {
      title: 'Enable Newsletter Form',
      name: 'isNewsletterFormEnabled',
      type: 'boolean',
      group: 'newsletter'
    },
    {
      title: 'Titre',
      name: 'titleNewsletterForm',
      type: 'string',
      hidden: ({ parent }: any) => parent?.isNewsletterFormEnabled !== true,
      group: 'newsletter'
    },
    {
      title: 'Introduction',
      name: 'bodyNewsletterForm',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({ parent }: any) => parent?.isNewsletterFormEnabled !== true,
      group: 'newsletter'
    },
    {
      title: 'Form Action URL',
      name: 'actionNewsletterForm',
      type: 'string',
      hidden: ({ parent }: any) => parent?.isNewsletterFormEnabled !== true,
      group: 'newsletter'
    },
    // Newsletter
    {
      title: 'Enable Copyright Information',
      name: 'isCopyrightInfo',
      type: 'boolean',
      group: 'copyrightInfo'
    },
    {
      title: 'Copyright Name',
      name: 'copyrightName',
      type: 'string',
      hidden: ({ parent }: any) => parent?.isCopyrightInfo !== true,
      group: 'copyrightInfo'
    },
    {
      title: 'Copyright Phase',
      name: 'copyrightPhase',
      type: 'string',
      hidden: ({ parent }: any) => parent?.isCopyrightInfo !== true,
      group: 'copyrightInfo'
    },
    {
      title: 'Enable Copyright 1367 Agency',
      name: 'isCopyrightEnt',
      type: 'boolean',
      hidden: ({ parent }: any) => parent?.isCopyrightInfo !== true,
      group: 'copyrightInfo'
    }
  ],
  initialValue: {
    isSocialNavEnabled: false,
    isNavFooterEnabled: false,
    isContentEnabled: false,
    isNewsletterFormEnabled: false
  }
};
