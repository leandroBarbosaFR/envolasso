import { FiUsers } from 'react-icons/fi';

export default {
  name: 'siteSetings',
  title: 'Site Settings',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'identitySetings',
      title: 'Identity Settings',
      default: true
    },
    {
      name: 'creatorSetings',
      title: 'Creator Settings'
    }
  ],
  fields: [
    // ===============================================================
    // Identity Settings
    // ===============================================================
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
      description: 'The public name of the website; this is appended to the page title by default.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Name',
      name: 'entityName',
      type: 'string',
      description: 'The name of the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Alternate Entity Name',
      name: 'alternateEntityName',
      type: 'string',
      description: 'An alternate or nickname for the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Description',
      name: 'entityDescriptionName',
      type: 'text',
      rows: 4,
      description: 'A description of the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity URL',
      name: 'entityUrl',
      type: 'url',
      description: 'A URL for the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Brand',
      name: 'entityBrand',
      type: 'image',
      description:
        'An image or logo that represents the entity that owns the website. The image must be in JPG, PNG, or GIF format.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Telephone',
      name: 'entityTelephone',
      type: 'string',
      description: 'The primary contact telephone number for the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Email',
      name: 'entityEmail',
      type: 'email',
      description: 'The primary contact email address for the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Address',
      name: 'entityAddress',
      type: 'text',
      rows: 4,
      description: 'The address of the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Locality',
      name: 'entityLocality',
      type: 'string',
      description: 'The locality of the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Region',
      name: 'entityRegion',
      type: 'string',
      description: 'The Region of the entity that owns the website.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Postcode',
      name: 'entityPostcode',
      type: 'string',
      description: 'The Postcode of the entity that owns the website',
      group: 'identitySetings'
    },
    {
      title: 'Entity Country',
      name: 'entityCountry',
      type: 'string',
      description: 'The country in which the entity that owns the website is located.',
      group: 'identitySetings'
    },
    {
      title: 'Entity Latitude',
      name: 'entityLatitude',
      type: 'string',
      description: 'The latitude of the location of the entity that owns the website,',
      group: 'identitySetings'
    },
    {
      title: 'Entity Longitude',
      name: 'entityLongitude',
      type: 'string',
      description: 'The Longitude of the location of the entity that owns the website,',
      group: 'identitySetings'
    },
    // ===============================================================
    // Creator Settings
    // ===============================================================
    {
      title: 'Creator Name',
      name: 'creatorName',
      type: 'string',
      description: 'The name of the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Alternate Creator Name',
      name: 'alternateCreatorName',
      type: 'string',
      description: 'An alternate or nickname for the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Description',
      name: 'creatorDescriptionName',
      type: 'text',
      rows: 4,
      description: 'A description of the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator URL',
      name: 'creatorUrl',
      type: 'url',
      description: 'A URL for the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Brand',
      name: 'creatorBrand',
      type: 'image',
      description:
        'An image or logo that represents the creator that owns the website. The image must be in JPG, PNG, or GIF format.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Telephone',
      name: 'creatorTelephone',
      type: 'string',
      description: 'The primary contact telephone number for the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Email',
      name: 'creatorEmail',
      type: 'email',
      description: 'The primary contact email address for the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Address',
      name: 'creatorAddress',
      type: 'text',
      rows: 4,
      description: 'The address of the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Locality',
      name: 'creatorLocality',
      type: 'string',
      description: 'The locality of the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Region',
      name: 'creatorRegion',
      type: 'string',
      description: 'The Region of the creator that owns the website.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Postcode',
      name: 'creatorPostcode',
      type: 'string',
      description: 'The Postcode of the creator that owns the website',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Country',
      name: 'creatorCountry',
      type: 'string',
      description: 'The country in which the creator that owns the website is located.',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Latitude',
      name: 'creatorLatitude',
      type: 'string',
      description: 'The latitude of the location of the creator that owns the website,',
      group: 'creatorSetings'
    },
    {
      title: 'Creator Longitude',
      name: 'creatorLongitude',
      type: 'string',
      description: 'The Longitude of the location of the creator that owns the website,',
      group: 'creatorSetings'
    }
  ],
  initialValue: {}
};
