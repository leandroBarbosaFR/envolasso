import { definePlugin } from 'sanity';
import accordionGroup from './schemas/objects/accordion-group';
import accordionItem from './schemas/objects/accordion-item';
import accordionSection from './schemas/objects/accordion-section';
import blogFeed from './schemas/objects/blog-feed';
import contact from './schemas/documents/contact';
import contactForm from './schemas/objects/contact-form';
import contactInfo from './schemas/objects/contact-info';
import emailLink from './schemas/objects/email-link';
import embedSection from './schemas/objects/embed-section';
import embedServices from './schemas/objects/embedServices';
import externalLink from './schemas/objects/external-link';
import internalLink from './schemas/objects/internal-link';
import linkedInLink from './schemas/objects/linkedIn-link';
import navigation from './schemas/objects/navigation';
import navigationDropdown from './schemas/objects/navigation-dropdown';
import page from './schemas/documents/page';
import portfolioFeed from './schemas/objects/portfolio-feed';
import siteFooter from './schemas/documents/site-footer';
import siteHeader from './schemas/documents/site-header';
import socialMediaLink from './schemas/objects/socialMediaLink';
import socialMediaNavigation from './schemas/objects/social-media-navigation';
import teamProfileFeed from './schemas/objects/team-profile-feed';
import telLink from './schemas/objects/tel-link';
import textColumn from './schemas/objects/text-column';
import textColumnBasic from './schemas/objects/text-column-basic';
import textImgSection from './schemas/objects/text-img-section';
import pricingSection from './schemas/objects/pricing-section';
import price from './schemas/objects/price';
import textSection from './schemas/objects/text-section';
import logoFeedSection from './schemas/objects/logo-section';
import googleReviewSection from './schemas/objects/google-reviews';
import textSectionAside from './schemas/objects/text-section-aside';
import client from './schemas/objects/client';
import clientLogos from './schemas/objects/client-logos';

interface layoutVariantOptions {
  title: string;
  value: string;
}

interface AgencyCommonPluginOptions {
  enableTypes: string[];
  commonLayoutsContact: { type: string }[];
  linkableContentTypes: string[];
  layoutVariantAccordionSection: layoutVariantOptions[];
  layoutVariantBlogFeed: layoutVariantOptions[];
  layoutVariantContactForm: layoutVariantOptions[];
  layoutVariantConactInfo: layoutVariantOptions[];
  layoutVariantEmbedSection: layoutVariantOptions[];
  layoutVariantPortfolioFeed: layoutVariantOptions[];
  layoutVariantTeamProfileFeed: layoutVariantOptions[];
  layoutVariantTextImgSection: layoutVariantOptions[];
  layoutVariantTextSection: layoutVariantOptions[];
  layoutVariantLogoFeedSection: layoutVariantOptions[];
  layoutVariantGoogleReviewSection: layoutVariantOptions[];
  layoutVariantTextSectionAside: layoutVariantOptions[];
  layoutVariantPricingSection: layoutVariantOptions[];
  layoutVariantPageHeader: { title: string; value: string }[];
  layoutVariantClientLogos: layoutVariantOptions[];
}

const agencyCommon = definePlugin(
  ({
    enableTypes = [],
    commonLayoutsContact,
    linkableContentTypes,
    layoutVariantAccordionSection,
    layoutVariantBlogFeed,
    layoutVariantContactForm,
    layoutVariantConactInfo,
    layoutVariantEmbedSection,
    layoutVariantPortfolioFeed,
    layoutVariantTeamProfileFeed,
    layoutVariantTextImgSection,
    layoutVariantTextSection,
    layoutVariantLogoFeedSection,
    layoutVariantGoogleReviewSection,
    layoutVariantTextSectionAside,
    layoutVariantPageHeader,
    layoutVariantPricingSection,
    layoutVariantClientLogos
  }: AgencyCommonPluginOptions) => ({
    name: 'agency-common',

    form: {
      components: {
        input: (props) => {
          switch (props.schemaType?.name) {
            case '':
              return null;
            default:
              return props.renderDefault(props);
          }
        }
      }
    },

    schema: {
      types: [
        // Documents
        accordionGroup,
        accordionItem,
        contact({ commonLayoutsContact, layoutVariantPageHeader }),
        emailLink,
        embedServices,
        externalLink,
        linkedInLink,
        navigation,
        navigationDropdown,
        page,
        siteFooter,
        siteHeader,
        socialMediaLink,
        socialMediaNavigation,
        telLink,
        textColumn,
        textColumnBasic,
        price,
        // Objects
        internalLink({ linkableContentTypes }),
        clientLogos({ layoutVariantClientLogos }),
        accordionSection({ layoutVariantAccordionSection }),
        blogFeed({ layoutVariantBlogFeed }),
        contactForm({ layoutVariantContactForm }),
        contactInfo({ layoutVariantConactInfo }),
        embedSection({ layoutVariantEmbedSection }),
        portfolioFeed({ layoutVariantPortfolioFeed }),
        teamProfileFeed({ layoutVariantTeamProfileFeed }),
        textImgSection({ layoutVariantTextImgSection }),
        textSection({ layoutVariantTextSection }),
        logoFeedSection({ layoutVariantLogoFeedSection }),
        pricingSection({ layoutVariantPricingSection }),
        googleReviewSection({ layoutVariantGoogleReviewSection }),
        textSectionAside({ layoutVariantTextSectionAside }),
        client
      ].filter(({ name }) => enableTypes.includes(name))
    }
  })
);

export default agencyCommon;

export { filterReferencesByLocale, isUniqueAcrossAllLocales } from './utils';
export { default as seoFields } from './utils/seo-fields';
