export default {
  title: 'Social media Navigaiton',
  name: 'common.socialMediaNavigation',
  type: 'object',
  fields: [
    {
      title: 'Enable Icons',
      name: 'isIconsEnabled',
      type: 'boolean',
    },
    {
      title: 'List',
      name: 'naviagtionList',
      type: 'array',
      of: [{type: 'common.socialMediaLink'}],
      validation: (Rule: {required: () => boolean}) => Rule.required(),
    },
  ],
  initialValue: {
    isIconsEnabled: true,
  },
}
