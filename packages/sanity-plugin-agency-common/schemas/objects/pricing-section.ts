interface PricingSectionArgs {
  layoutVariantPricingSection: { title: string; value: string }[];
}

export default ({ layoutVariantPricingSection }: PricingSectionArgs) => ({
  title: 'Pricing Section',
  name: 'common.layout.pricingSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantPricingSection.map(({ title, value }) => ({ title, value }))
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
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }]
    },
    {
      title: 'Pricings',
      name: 'pricings',
      type: 'array',
      of: [{ type: 'common.price' }]
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
        subtitle: `Pricing Section: ${subtitle ? subtitle : 'unknown'}`
      };
    }
  }
});
