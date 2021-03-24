export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('You need to fill the Title, okay?')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
