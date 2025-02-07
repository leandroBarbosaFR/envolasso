import { filterReferencesByLocale } from '../../utils';

interface ProfileFeedArgs {
  layoutVariantTeamProfileFeed: { title: string; value: string }[];
}

export default ({ layoutVariantTeamProfileFeed }: ProfileFeedArgs) => ({
  title: 'Team Profile Feed',
  name: 'common.layout.teamProfileFeed',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantTeamProfileFeed.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: '',
      name: 'profiles',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'profile',
          title: 'Profile',
          to: [{ type: 'teamProfile' }],
          options: {
            filter: filterReferencesByLocale
          }
        }
      ]
    },
    {
      title: 'Call to Action (CTA) title',
      name: 'ctaTitle',
      type: 'string'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [
        { type: 'common.externalLink' },
        { type: 'common.internalLink' },
        { type: 'common.emailLink' },
        { type: 'common.telLink' }
      ],
      fielset: 'content'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare(selection: { title: string; subtitle: string }) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Team Profiles Feed: ${subtitle ? subtitle : 'unknown'}`
      };
    }
  }
});
