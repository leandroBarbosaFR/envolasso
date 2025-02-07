import { seoFields } from '@agency-platform/sanity-plugin-agency-common';

interface LandingPageArgs {
  commonLayouts: { type: string }[];
}

export default ({ commonLayouts }: LandingPageArgs) => ({
  name: 'landingPage',
  title: 'Home',
  type: 'document',
  i18n: true,
  groups: [
    {
      name: 'hero',
      title: 'Hero seciton',
      default: true
    },
    {
      name: 'layout',
      title: 'Content Layouts'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    // hero
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: [{ title: 'Default', value: 'default' }]
      },
      group: 'hero',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Hero Type',
      name: 'heroType',
      type: 'string',
      options: {
        list: [
          { title: 'Static', value: 'static' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Content Carousel', value: 'contentCarousel' }
        ]
      },
      group: 'hero',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Enable search',
      name: 'isHeroSearchEnabled',
      type: 'boolean',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType === 'contentCarousel'
    },
    // Content Static
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType === 'contentCarousel'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType === 'contentCarousel'
    },
    {
      title: 'Stand first',
      name: 'standFirst',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType === 'contentCarousel'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      group: 'hero',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }],
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType === 'contentCarousel'
    },
    // If static is selected
    {
      title: 'Background Media',
      name: 'heroStaticMedia',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ]
      },
      group: 'hero',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      hidden: ({ parent }: any) => parent?.heroType !== 'static'
    },
    {
      title: 'Video URL',
      name: 'heroVideoUrl',
      type: 'url',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroStaticMedia !== 'video' || parent?.heroType !== 'static'
    },
    {
      title: 'First frame image',
      name: 'heroFirstFrameImage',
      type: 'image',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroStaticMedia !== 'video' || parent?.heroType !== 'static'
    },
    {
      title: 'Image',
      name: 'heroImage',
      type: 'image',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroStaticMedia !== 'image' || parent?.heroType !== 'static',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    },
    // If carousel is selected
    {
      title: 'Carousel Transition: Slide/Fade',
      description: 'Ssitch on for slide transition of for fade',
      name: 'isSlideTransition',
      type: 'boolean',
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType !== 'carousel'
    },
    {
      title: 'Carousel',
      name: 'carousel',
      type: 'array',
      of: [{ type: 'hero.image' }, { type: 'hero.video' }],
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType !== 'carousel'
    },
    // If Content carousel is selected
    {
      title: 'Content Carousel',
      name: 'contentCarousel',
      type: 'array',
      of: [{ type: 'hero.content' }],
      group: 'hero',
      hidden: ({ parent }: any) => parent?.heroType !== 'contentCarousel'
    },
    // Layout
    {
      title: 'Layout',
      name: 'layout',
      type: 'array',
      of: commonLayouts.map(({ type }) => ({ type })),
      group: 'layout'
    },
    // SEO
    ...seoFields
  ],
  initialValue: {
    isSlideTransition: false
  },
  preview: {
    select: {
      title: 'title',
      image: 'image',
      locale: '__i18n_lang',
      locales: '__i18n_refs'
    },
    prepare(selection: {
      title: string;
      image: string;
      locale: string;
      locales: { _key: string | number }[];
    }) {
      const { title, locale, locales = [], image } = selection;
      const languages = [locale, ...locales.map(({ _key }) => _key)].join(', ');
      return {
        title: title,
        subtitle: languages,
        media: image
      };
    }
  }
});
