import { definePlugin } from 'sanity';
import about from './schemas/documents/about';

interface AgencyAboutPluginArgs {
  commonLayouts: { type: string }[];
}

const agencyAbout = definePlugin(({ commonLayouts }: AgencyAboutPluginArgs) => ({
  schema: {
    types: [about({ commonLayouts })]
  }
}));

export default agencyAbout;
