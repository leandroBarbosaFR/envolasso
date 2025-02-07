import { FiUsers } from 'react-icons/fi';

export default {
  name: 'siteHeader',
  title: 'Header',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'setings',
      title: 'Setings',
      default: true
    },
    {
      name: 'navigation',
      title: 'Site Navigation'
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
    // navigation
    {
      title: 'Enable Site Navigaiton',
      name: 'isNavEnabled',
      type: 'boolean',
      initialValue: true,
      group: 'navigation'
    },
    {
      title: 'Navigation Site',
      name: 'navigationSite',
      type: 'common.navigation',
      group: 'navigation',
      hidden: ({ parent }: any) => parent?.isNavEnabled !== true
    }
  ]
};
