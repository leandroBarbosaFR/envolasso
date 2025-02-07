import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_projectId as string,
    dataset: process.env.SANITY_STUDIO_dataset as string,
  },
  studioHost: 'sanity-studio1367-next',
  autoUpdates: true,
})
