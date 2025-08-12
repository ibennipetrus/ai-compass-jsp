export default {
  name: 'Header',
  title: 'Header',
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
            {
              name: 'actionType',
              title: 'Aktionstyp',
              type: 'string',
              options: {list: ['link', 'modal', 'download']},
              initialValue: 'link',
            },
            {name: 'link', title: 'Link / Aktion', type: 'url'}, // für actionType "link"
            {
              name: 'file',
              title: 'Datei (für Download)',
              type: 'file',
              options: {accept: 'application/pdf'},
            }, // für actionType "download"
            {
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              options: {
                list: ['FaCheckCircle', 'FaCoffee', 'FaDownload'],
                layout: 'dropdown',
              },
            },
            {name: 'visible', title: 'Sichtbar?', type: 'boolean', initialValue: true},
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
