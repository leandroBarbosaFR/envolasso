interface TestimonialsArgs {
  layoutVariantTestimonials: { title: string; value: string }[];
}

export default ({ layoutVariantTestimonials }: TestimonialsArgs) => ({
  title: 'Testimonials',
  name: 'common.layout.testimonials',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantTestimonials.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Sous-titre',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Titre',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [{ type: 'common.testimonial' }]
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'subtitle',
  //     image: 'image'
  //   },
  //   prepare(selection: { title: string; subtitle: string }) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `${subtitle ? subtitle : 'unknown'}`
  //     };
  //   }
  // }
});
