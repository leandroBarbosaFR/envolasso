interface ClientLogosArgs {
  layoutVariantClientLogos: { title: string; value: string }[];
}

export default ({ layoutVariantClientLogos }: ClientLogosArgs) => ({
  title: 'Client Logos',
  name: 'common.layout.clientLogos',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantClientLogos.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Clients',
      name: 'clients',
      type: 'array',
      of: [{ type: 'common.client' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare(selection: { title: string; subtitle: string }) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Client Logos: ${subtitle ? subtitle : 'unknown'}`
      };
    }
  }
});
