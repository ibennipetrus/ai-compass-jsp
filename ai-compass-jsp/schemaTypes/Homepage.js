export default {
  name: 'Homepage',
  title: 'Homepage',
  type: 'document',
  fieldsets: [
    {name: 'header', title: 'Header-Bereich', options: {collapsible: true, collapsed: false}},
    {name: 'benefits', title: 'Benefits', options: {collapsible: true, collapsed: true}},
    {name: 'faq', title: 'FAQ', options: {collapsible: true, collapsed: true}},
  ],
  fields: [
    // === HEADER ===
    {
      name: 'headerSubtitle',
      title: 'Header Untertitel',
      type: 'string',
      fieldset: 'header',
    },
    {
      name: 'headerTitle',
      title: 'Header Titel',
      type: 'string',
      fieldset: 'header',
    },
    {
      name: 'headerText',
      title: 'Header Beschreibung',
      type: 'text',
      fieldset: 'header',
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
      fieldset: 'header',
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

  preview: {
    prepare() {
      return {
        title: 'Homepage', // statischer Titel im Studio oben und in der Liste
      }
    },
  },
}
