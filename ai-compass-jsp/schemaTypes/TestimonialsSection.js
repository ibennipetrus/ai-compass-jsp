export default {
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'position', title: 'Position', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'image',
              title: 'Bild',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position',
              media: 'image',
            },
          },
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Testimonials Section',
      }
    },
  },
}
