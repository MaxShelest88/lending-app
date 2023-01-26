import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of the Project',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty of the Project',
      type: 'number',
      initialValue: 1,
      options: {min: 1, max: 5, step: 1},
    }),
    defineField({
      name: 'mainImage',
      title: 'Screenshots',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stacks',
      title: 'Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stack'}}],
    }),
  ],
})
