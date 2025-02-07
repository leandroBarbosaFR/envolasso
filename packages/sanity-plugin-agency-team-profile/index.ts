import {definePlugin} from 'sanity'
import teamProfile from './schemas/documents/profile'
import teamProfiles from './schemas/documents/profile-index'
import category from './schemas/documents/category'

const agencyTeamProfile = definePlugin(() => ({
  schema: {
    types: [teamProfiles, teamProfile, category],
  },
}))

export default agencyTeamProfile
