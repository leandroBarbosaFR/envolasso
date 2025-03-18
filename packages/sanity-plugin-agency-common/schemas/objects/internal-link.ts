import { filterReferencesByLocale } from '../../utils';

export default ({ linkableContentTypes }: { linkableContentTypes: string[] }) => ({
  title: 'Internal Link',
  name: 'common.internalLink',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'reference',
      to: linkableContentTypes.map((type) => ({ type })),
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      options: {
        filter: filterReferencesByLocale
      }
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre'
  //   },
  //   prepare(selection: { title: string; subtitle: string }) {
  //     const { title } = selection;
  //     return {
  //       title: title
  //     };
  //   }
  // }
});
