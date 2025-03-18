export default {
  name: 'common.navigation',
  title: 'Naviagtion',
  type: 'object',
  i18n: true,
  fields: [
    {
      title: 'Enable Title',
      name: 'isTitleEnabled',
      type: 'boolean',
      initialValue: true
    },
    {
      title: 'Titre',
      name: 'titleNav',
      type: 'string',
      hidden: ({ parent }: any) => parent?.isTitleEnabled !== true
    },
    {
      title: 'List',
      name: 'naviagtionList',
      type: 'array',
      of: [
        { type: 'common.internalLink' },
        { type: 'common.navigationDropdown' },
        { type: 'common.externalLink' }
      ],
      validation: (Rule: { required: () => boolean }) => Rule.required()
    }
  ]
  // preview: {
  //   select: {
  //     title: 'titleNav'
  //   },
  //   prepare(selection: { title: string; subtitle: string }) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `${subtitle ? subtitle : 'unknown'}`
  //     };
  //   }
  // }
};
