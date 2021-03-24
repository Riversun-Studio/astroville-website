export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('You forgot to fill your name XD')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('You need to create a Slug, click Generate button')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().warning(`Don't be shy, show how awesome you are!`)
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
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
      name: 'linkedin',
      title: 'Linkedin Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
