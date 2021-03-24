export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'map',
      title: 'Google Map Link',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'Whatsapp',
      type: 'string',
      validation: Rule => [
        Rule.max(13).error(`Phone number can't exceeds 13 characters`),
      ]
    },
    {
      name: 'twitter',
      title: 'Twitter Link',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram Link',
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'Youtube Link',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'Linkedin Link',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'address',
    }
  },
}
