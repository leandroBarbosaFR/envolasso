interface LogoFeedSectionArgs {
  layoutVariantLogoFeedSection: { title: string; value: string }[];
}

export default ({ layoutVariantLogoFeedSection }: LogoFeedSectionArgs) => ({
  title: 'Logo Section',
  name: 'common.layout.logoFeedSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantLogoFeedSection.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection: { title: string }) {
      const { title } = selection;
      return {
        title: title
      };
    }
  }
});
