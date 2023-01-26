export default defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Stack Title',
      type: 'string',
    }),
    defineField({
      name: 'skill',
      title: 'Level of Programming',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Screenshots',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
