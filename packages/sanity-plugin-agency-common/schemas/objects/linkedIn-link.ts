export default {
  title: 'LinkedIn Profile',
  name: 'common.linkedInLink',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: {required: () => boolean}) => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule: {required: () => boolean}) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
    prepare(selection: {title: string; subtitle: string}) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: `${subtitle ? subtitle : 'unknown'}`,
      }
    },
  },
}
