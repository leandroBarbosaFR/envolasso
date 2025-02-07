// Sanity
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {
  getFilteredDocumentTypeListItems,
  withDocumentI18nPlugin,
} from '@sanity/document-internationalization'
// import {visionTool} from '@sanity/vision'
// 1367 Agency npm plugins
import agencyAbout from '@agency-platform/sanity-plugin-agency-about'
import agencyBlog from '@agency-platform/sanity-plugin-agency-blog'
import agencyCommon from '@agency-platform/sanity-plugin-agency-common'
import agencyLandingPage from '@agency-platform/sanity-plugin-agency-landing-page'
import agencyPortfolio from '@agency-platform/sanity-plugin-agency-portfolio'
import agencyServices from '@agency-platform/sanity-plugin-agency-services'
import agencySiteSettings from '@agency-platform/sanity-plugin-agency-site-settings'
import agencyTeamProfile from '@agency-platform/sanity-plugin-agency-team-profile'

// 1367 Agency local plugins
import {schemaTypes} from './schemas'

const i18nConfig: any = {
  languages: [
    {id: 'en_GB', title: 'English (UK)'},
    // {id: 'en_US', title: 'English (US)'},
    {id: 'fr_FR', title: 'French'},
    // {id: 'fr_CA', title: 'French (CA)'},
    // {id: 'en_CA', title: 'English (CA)'},
  ],
  includeDeskTool: false,
  referenceBehavior: 'weak',
}

// Define the singleton document types
const singletonTypes = new Set([
  'siteSettings',
  'globalSetings',
  'siteSetings',
  'siteHeader',
  'siteFooter',
  'landingPage',
  'contact',
  'teamProfile.index',
  'blog.index',
  'portfolio.index',
])

export default defineConfig({
  name: process.env.SANITY_STUDIO_name as string,
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  title: process.env.SANITY_STUDIO_title as string,
  projectId: process.env.SANITY_STUDIO_projectId as string,
  dataset: process.env.SANITY_STUDIO_dataset as string,
  // document: {
  //   actions: (prev, {schemaType}) => {
  //     // Allow only `delete`.
  //     if (schemaType === 'siteSettings') {
  //       return prev.filter((obj) => obj.action === 'delete')
  //     }
  //     // Allow everything for the rest of documents
  //     return prev
  //   },
  // },
  plugins: withDocumentI18nPlugin(
    [
      // visionTool({
      // Note: These are both optional
      // defaultApiVersion: 'v2021-10-21',
      // defaultDataset: 'staging',
      // }),
      deskTool({
        structure: (S, {schema}) => {
          const docTypeListItems = getFilteredDocumentTypeListItems({
            S,
            schema,
            config: i18nConfig,
          })

          return S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Global site settings')
                .child(
                  S.list()
                    .title('Settings')
                    .items([
                      S.listItem()
                        .title('Site Settings')
                        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                      S.divider(),
                      S.listItem()
                        .title('Header')
                        .child(S.document().schemaType('siteHeader').documentId('siteHeader')),
                      S.divider(),
                      S.listItem()
                        .title('Footer')
                        .child(S.document().schemaType('siteFooter').documentId('siteFooter')),
                      S.divider(),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Landing Page')
                .child(S.document().schemaType('landingPage').documentId('landingPage')),
              S.divider(),
              S.listItem()
                .title('About')
                .child(
                  S.list()
                    .title('About')
                    .items([...docTypeListItems.filter(({id}) => ['about'].includes(id))])
                ),
              S.listItem()
                .title('The Team')
                .child(
                  S.list()
                    .title('The Team')
                    .items([
                      S.listItem()
                        .title('Blog Index')
                        .child(S.document().schemaType('teamProfile').documentId('teamProfile')),
                      ...docTypeListItems.filter(({id}) =>
                        ['teamProfile', 'teamProfile.category'].includes(id)
                      ),
                    ])
                ),
              S.listItem()
                .title('Services')
                .child(
                  S.list()
                    .title('Services')
                    .items([...docTypeListItems.filter(({id}) => ['service'].includes(id))])
                ),
              S.listItem()
                .title('Blogs')
                .child(
                  S.list()
                    .title('Blogs')
                    .items([
                      S.listItem()
                        .title('Blog Index')
                        .child(S.document().schemaType('blog.index').documentId('blog.index')),
                      ...docTypeListItems.filter(({id}) => ['blog', 'blog.category'].includes(id)),
                    ])
                ),
              S.listItem()
                .title('Portfolio')
                .child(
                  S.list()
                    .title('Usages')
                    .items([
                      S.listItem()
                        .title('Portfolio Index')
                        .child(
                          S.document().schemaType('portfolio.index').documentId('portfolio.index')
                        ),
                      ...docTypeListItems.filter(({id}) =>
                        ['portfolio', 'portfolio.category'].includes(id)
                      ),
                    ])
                ),
              S.listItem()
                .title('Contact')
                .child(S.document().schemaType('contact').documentId('contact')),
              S.listItem()
                .title('Aux Pages')
                .child(
                  S.list()
                    .title('Pages')
                    .items([...docTypeListItems.filter(({id}) => ['page'].includes(id))])
                ),
            ])
        },
      }),
      agencyCommon({
        enableTypes: [
          // Objects
          'common.accordionGroup',
          'common.accordionItem',
          'common.emailLink',
          'common.embedServices',
          'common.externalLink',
          'common.internalLink',
          'common.layout.accordionSection',
          'common.layout.blogFeed',
          'common.layout.contactForm',
          'common.layout.contactInfo',
          'common.layout.embedSection',
          'common.layout.portfolioFeed',
          'common.layout.teamProfileFeed',
          'common.layout.textColumn',
          'common.layout.textColumnBasic',
          'common.layout.textImgSection',
          'common.layout.textSection',
          'common.layout.logoFeedSection',
          'common.layout.googleReviewSection',
          'common.layout.textSectionAside',
          'common.linkedInLink',
          'common.navigation',
          'common.navigationDropdown',
          'common.socialMediaLink',
          'common.socialMediaNavigation',
          'common.telLink',
          'common.price',
          'common.layout.pricingSection',
          'common.layout.clientLogos',
          'common.client',
          // Page
          'contact',
          'page',
          'siteFooter',
          'siteHeader',
        ],
        linkableContentTypes: [
          'landingPage',
          'about',
          'blog.category',
          'blog.index',
          'blog',
          'contact',
          'page',
          'portfolio.category',
          'portfolio.index',
          'portfolio',
          'service',
        ],
        commonLayoutsContact: [
          {type: 'common.layout.contactForm'},
          {type: 'common.layout.contactInfo'},
          {type: 'common.layout.textImgSection'},
        ],
        layoutVariantPageHeader: [{title: 'Default', value: 'default'}],
        layoutVariantAccordionSection: [{title: 'Default', value: 'default'}],
        layoutVariantClientLogos: [{title: 'Default', value: 'default'}],
        layoutVariantBlogFeed: [{title: 'Default', value: 'default'}],
        layoutVariantContactForm: [{title: 'Defaults', value: 'default'}],
        layoutVariantConactInfo: [{title: 'Defaults', value: 'default'}],
        layoutVariantEmbedSection: [{title: 'Default', value: 'default'}],
        layoutVariantPortfolioFeed: [
          {title: 'Default', value: 'default'},
          {title: 'Alternative', value: 'alternative'},
        ],
        layoutVariantTeamProfileFeed: [{title: 'Default', value: 'default'}],
        layoutVariantTextImgSection: [
          {title: 'Default', value: 'default'},
          {title: 'Alternative', value: 'alternative'},
          {title: 'Contact Page', value: 'contactPage'},
        ],
        layoutVariantTextSection: [
          {title: 'Default', value: 'default'},
          {title: 'Alternative', value: 'alternative'},
        ],
        layoutVariantLogoFeedSection: [{title: 'Default', value: 'default'}],
        layoutVariantGoogleReviewSection: [{title: 'Default', value: 'default'}],
        layoutVariantPricingSection: [{title: 'Default', value: 'default'}],
        layoutVariantTextSectionAside: [{title: 'Default', value: 'default'}],
      }),
      agencySiteSettings(),
      agencyAbout({
        commonLayouts: [
          {type: 'common.layout.textSection'},
          {type: 'common.layout.textImgSection'},
          {type: 'common.layout.textSectionAside'},
          {type: 'common.layout.embedSection'},
          {type: 'common.layout.accordionSection'},
          {type: 'common.layout.blogFeed'},
          {type: 'common.layout.portfolioFeed'},
          {type: 'common.layout.teamProfileFeed'},
        ],
      }),
      agencyBlog({
        layoutVariantFeaturedBlogPosts: [{title: 'Default', value: 'default'}],
        commonLayoutsBlog: [
          {type: 'common.layout.textSection'},
          {type: 'common.layout.textImgSection'},
          {type: 'common.layout.textSectionAside'},
          {type: 'common.layout.embedSection'},
          {type: 'common.layout.accordionSection'},
          {type: 'common.layout.blogFeed'},
          {type: 'common.layout.portfolioFeed'},
          {type: 'common.layout.teamProfileFeed'},
        ],
      }),
      agencyLandingPage({
        commonLayouts: [
          {type: 'common.layout.textSection'},
          {type: 'common.layout.textImgSection'},
          {type: 'common.layout.textSectionAside'},
          {type: 'common.layout.embedSection'},
          {type: 'common.layout.accordionSection'},
          {type: 'common.layout.blogFeed'},
          {type: 'common.layout.portfolioFeed'},
          {type: 'common.layout.teamProfileFeed'},
          {type: 'common.layout.logoFeedSection'},
          {type: 'common.layout.googleReviewSection'},
          {type: 'common.layout.pricingSection'},
          {type: 'common.layout.clientLogos'},
        ],
      }),
      agencyPortfolio({
        layoutVariantFeaturedPortfolio: [{title: 'Default', value: 'default'}],
        commonLayoutsPortfolio: [
          {type: 'common.layout.textSection'},
          {type: 'common.layout.textImgSection'},
          {type: 'common.layout.textSectionAside'},
          {type: 'common.layout.embedSection'},
          {type: 'common.layout.accordionSection'},
          {type: 'common.layout.blogFeed'},
          {type: 'common.layout.portfolioFeed'},
          {type: 'common.layout.teamProfileFeed'},
        ],
      }),
      agencyServices({
        commonLayouts: [
          {type: 'common.layout.textSection'},
          {type: 'common.layout.textImgSection'},
          {type: 'common.layout.textSectionAside'},
          {type: 'common.layout.embedSection'},
          {type: 'common.layout.accordionSection'},
          {type: 'common.layout.blogFeed'},
          {type: 'common.layout.portfolioFeed'},
          {type: 'common.layout.teamProfileFeed'},
        ],
      }),
      agencyTeamProfile(),
    ],
    i18nConfig
  ),

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
})
