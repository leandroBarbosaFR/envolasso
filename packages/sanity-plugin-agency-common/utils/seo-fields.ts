export default [
  {
    title: 'Override Title',
    name: 'overideMetaTitle',
    type: 'boolean',
    description: 'Override page title.',
    group: 'seo'
  },
  {
    title: 'Titre',
    name: 'metaTitle',
    type: 'string',
    description:
      'Make sure your title tag is explicit and contains your most important keywords. Be sure that each page has a unique title tag.',
    group: 'seo',
    hidden: ({ parent }: any) => parent?.overideMetaTitle !== true
  },
  {
    title: 'Override Description',
    name: 'overideMetaDescription',
    type: 'boolean',
    description: 'Override page title.',
    group: 'seo'
  },
  {
    title: 'Description',
    name: 'metaDescription',
    type: 'text',
    rows: 4,
    description:
      'SEO descriptions allow you to influence how your web pages are described and displayed in search results. Ensure that all of your web pages have a unique meta description that is explicit and contains your most important keywords.',
    group: 'seo',
    hidden: ({ parent }: any) => parent?.overideMetaDescription !== true
  },
  {
    title: 'Override Keywords',
    name: 'overideMetaKeywords',
    type: 'boolean',
    description: 'Override keywords list.',
    group: 'seo'
  },
  {
    title: 'Keywords',
    name: 'MetaKeywords',
    type: 'string',
    description: 'Google ignores SEO Keywords tag; though other search engines do look at it.',
    group: 'seo',
    hidden: ({ parent }: any) => parent?.overideMetaKeywords !== true
  },
  {
    title: 'Override Image',
    name: 'overideMetaImage',
    type: 'boolean',
    group: 'seo'
  },
  {
    title: 'SEO Image ',
    name: 'metaImage',
    type: 'image',
    description:
      'This is the image that will be used for display as the global website brand, as well as on Twitter Cards and Facebook OpenGraph that link to the website, if they are not specified.',
    group: 'seo',
    hidden: ({ parent }: any) => parent?.overideMetaImage !== true
  },
  {
    title: 'Override Image',
    name: 'overideMetaImageDescription',
    type: 'boolean',
    group: 'seo'
  },
  {
    title: 'SEO Image Description',
    name: 'metaImageDescription',
    type: 'text',
    rows: 4,
    description:
      'A text description of the image conveying the essential nature of an image to users who are visually impaired.',
    group: 'seo',
    hidden: ({ parent }: any) => parent?.overideMetaImageDescription !== true
  }
];
