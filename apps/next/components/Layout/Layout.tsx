import {
  AccordionSection,
  PostFeedSection,
  ContactForm,
  AddressList,
  EmbedSection,
  PortfolioFeedSection,
  TeamProfileFeedSection,
  // TestimonialSection,
  TextImgSection,
  TextSection,
  TextSectionAside,
  LogoFeedSection,
  GoogleReviewSection,
  PricingSection,
  ClientLogoSection
} from '@agency-platform/react-ui';
import type { LayoutConfig } from '@agency-platform/shared-types';

// Props
interface LayoutProps {
  layout: LayoutConfig[];
}

// CMS layouts list
const Layout = ({ layout }: LayoutProps) => {
  const renderLayout = () =>
    layout &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout.map((layoutBlock: any, index) => {
      switch (layoutBlock._type) {
        case 'common.layout.accordionSection':
          return <AccordionSection key={index} data={layoutBlock} />;
        case 'common.layout.blogFeed':
          return <PostFeedSection key={index} data={layoutBlock} />;
        case 'common.layout.contactForm':
          return <ContactForm key={index} data={layoutBlock} />;
        case 'common.layout.contactInfo':
          return <AddressList key={index} data={layoutBlock} />;
        case 'common.layout.embedSection':
          return <EmbedSection key={index} data={layoutBlock} />;
        case 'common.layout.portfolioFeed':
          return <PortfolioFeedSection key={index} data={layoutBlock} />;
        case 'common.layout.teamProfileFeed':
          return <TeamProfileFeedSection key={index} data={layoutBlock} />;
        // case 'common.layout.testimonials':
        //   return <TestimonialSection key={index} data={layoutBlock} />;
        case 'common.layout.textImgSection':
          return <TextImgSection key={index} data={layoutBlock} />;
        case 'common.layout.textSection':
          return <TextSection key={index} data={layoutBlock} />;
        case 'common.layout.logoFeedSection':
          return <LogoFeedSection key={index} data={layoutBlock} />;
        case 'common.layout.googleReviewSection':
          return <GoogleReviewSection key={index} data={layoutBlock} />;
        case 'common.layout.textSectionAside':
          return <TextSectionAside key={index} data={layoutBlock} />;
        case 'common.layout.pricingSection':
          return <PricingSection key={index} data={layoutBlock} />;
        case 'common.layout.clientLogos':
          return <ClientLogoSection key={index} data={layoutBlock} />;
        default:
          return <p key={index}>No layout exists for {layoutBlock._type}</p>;
      }
    });

  return <>{renderLayout()}</>;
};

export default Layout;
