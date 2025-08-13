export default {
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  fields: [
    {
      name: 'members',
      title: 'Teammitglieder',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'role', title: 'Rolle', type: 'string'},
            {name: 'description', title: 'Beschreibung', type: 'text'},
            {
              name: 'photo',
              title: 'Foto',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'photo',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Section',
      }
    },
  },
}
