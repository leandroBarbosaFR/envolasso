import { definePlugin } from 'sanity';
import landingPage from './schemas/documents/landing-page';
import heroImage from './schemas/objects/hero-image';
import heroVideo from './schemas/objects/hero-video';
import heroContent from './schemas/objects/hero-content';

interface AgencyLandingPageArgs {
  commonLayouts: { type: string }[];
}

const agencyLandingPage = definePlugin(({ commonLayouts }: AgencyLandingPageArgs) => ({
  schema: {
    types: [landingPage({ commonLayouts }), heroImage, heroVideo, heroContent]
  }
}));

export default agencyLandingPage;
