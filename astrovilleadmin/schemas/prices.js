export default {
  name: 'prices',
  title: 'Prices',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().warning('You need to fill the Title, okay?')
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'price',
      title: 'Price (Rupiah)',
      type: 'number',
    },
    {
      name: 'discount',
      title: 'Discount (Percent)',
      type: 'number',
      validation: Rule => [
        Rule.lessThan(101).error('Keep your discount below 100%, lol'),
        Rule.integer().positive().warning('Please, no negative and decimals value')
      ]
    },
    {
      name: 'active',
      title: 'Show this to website?',
      type: 'boolean',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  initialValue: {
    discount: 0
  },

  preview: {
    select: {
      title: 'title',
    },
  },
}
