export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'questions',
      title: 'Fragen & Antworten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Frage',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Antwort',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'FAQ', // statischer Titel im Studio oben und in der Liste
      }
    },
  },
}
