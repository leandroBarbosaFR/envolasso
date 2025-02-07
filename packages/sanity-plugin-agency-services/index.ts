import { definePlugin } from 'sanity';
import services from './schemas/documents/service';

interface AgencyServicesPluginArgs {
  commonLayouts: { type: string }[];
}

const agencyServices = definePlugin(({ commonLayouts }: AgencyServicesPluginArgs) => ({
  schema: {
    types: [services({ commonLayouts })]
  }
}));

export default agencyServices;
