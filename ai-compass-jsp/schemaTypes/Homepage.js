export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // === HEADER ===
    {
      name: 'headerSubtitle',
      title: 'Header Untertitel',
      type: 'string',
    },
    {
      name: 'headerTitle',
      title: 'Header Titel',
      type: 'string',
    },
    {
      name: 'headerText',
      title: 'Header Beschreibung',
      type: 'text',
    },
    {
      name: 'buttons',
      title: 'Header Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Button Text', type: 'string'},
            {name: 'link', title: 'Link / Aktion', type: 'url'},
            {name: 'visible', title: 'Sichtbar?', type: 'boolean', initialValue: true},
            {name: 'isDownload', title: 'Download Button?', type: 'boolean', initialValue: false},
          ],
        },
      ],
    },

    // === GRID-BEREICH ===
    {
      name: 'mainImage',
      title: 'Großes Bild (links oben)',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Titel', type: 'string'},
            {name: 'description', title: 'Beschreibung', type: 'string'},
            {name: 'visible', title: 'Sichtbar?', type: 'boolean', initialValue: true},
          ],
        },
      ],
    },
  ],
}
