export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'text', // Hier von 'string' auf 'text' geändert
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    },
  ],
}
