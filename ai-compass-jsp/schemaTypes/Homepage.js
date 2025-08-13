export default {
  name: 'Homepage',
  title: 'Homepage',
  type: 'document',
  fieldsets: [
    {name: 'header', title: 'Header-Bereich', options: {collapsible: true, collapsed: false}},
    {name: 'grid', title: 'Grid-Bereich', options: {collapsible: true, collapsed: true}},
    {name: 'faq', title: 'FAQ', options: {collapsible: true, collapsed: true}},
    {name: 'whyAct', title: 'Warum handeln', options: {collapsible: true, collapsed: false}},
    {name: 'benefits', title: 'Benefits', options: {collapsible: true, collapsed: false}},
    {name: 'whyConfias', title: 'Warum Confias', options: {collapsible: true, collapsed: false}},
    {name: 'training', title: 'Training-Sektion', options: {collapsible: true, collapsed: true}},
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
      fieldset: 'grid',
    },
    {
      name: 'mainImageVisible',
      title: 'Großes Bild sichtbar?',
      type: 'boolean',
      initialValue: true,
      fieldset: 'grid',
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
      fieldset: 'grid',
    },
    {
      name: 'speakersInfo',
      title: 'Hinweis für Speaker',
      type: 'string',
      readOnly: true,
      description: 'Die Speaker werden in der eigenen "Speakers"-Liste gepflegt.',
      fieldset: 'grid',
    },
    {
      name: 'priceBox',
      title: 'Preis Box Texte',
      type: 'object',
      fieldset: 'grid',
      fields: [
        {
          name: 'mainPrice',
          title: 'Hauptpreis (großer Text)',
          type: 'string',
          description: 'z.B. 1750€',
        },
        {
          name: 'inlineSubText',
          title: 'Text neben dem Hauptpreis',
          type: 'string',
          description: 'z.B. (inkl. Förderbetrag)',
        },
        {
          name: 'belowText',
          title: 'Text unter dem Preis',
          type: 'string',
          description: 'z.B. bis 50 Personen inklusiv',
        },
      ],
    },
    {
      name: 'gridButton',
      title: 'Button unter Preisbox',
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
        {name: 'link', title: 'Link / Aktion', type: 'url'}, // für "link"
        {
          name: 'file',
          title: 'Datei (für Download)',
          type: 'file',
          options: {accept: 'application/pdf'},
        }, // für "download"
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
      fieldset: 'grid',
    },
    {
      name: 'provenExpertVisible',
      title: 'ProvenExpert Widget sichtbar?',
      type: 'boolean',
      initialValue: true,
      fieldset: 'grid',
    },

    // === Warum handeln ===
    {
      name: 'whyAct',
      title: 'Warum Sie jetzt handeln müssen',
      type: 'object',
      fieldset: 'whyAct',
      fields: [
        {
          name: 'visible',
          title: 'Sichtbar?',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'headline',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'Warum Sie jetzt handeln müssen',
        },
        {
          name: 'items',
          title: 'Unterpunkte',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },

    // === Benefits ===
    {
      name: 'benefitsVisible',
      title: 'Benefits Sektion sichtbar?',
      type: 'boolean',
      initialValue: true,
      fieldset: 'benefits',
    },
    {
      name: 'benefitsHeaderH3',
      title: 'Benefits Überschrift (h3)',
      type: 'string',
      fieldset: 'benefits',
    },
    {
      name: 'benefitsHeaderH2',
      title: 'Benefits Hauptüberschrift (h2)',
      type: 'string',
      fieldset: 'benefits',
    },
    {
      name: 'benefitsList',
      title: 'Benefits Liste',
      type: 'array',
      fieldset: 'benefits',
      of: [
        {
          type: 'object',
          title: 'Benefit',
          fields: [
            {
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              options: {
                list: [
                  {title: 'Training', value: 'training'},
                  {title: 'Self Learning', value: 'selfLearning'},
                  {title: 'Certification', value: 'certification'},
                  // hier kannst du noch mehr Icons definieren oder als SVGs anlegen
                ],
                layout: 'dropdown',
              },
            },
            {
              name: 'title',
              title: 'Titel (h4)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Beschreibung (p)',
              type: 'text',
            },
            {
              name: 'visible',
              title: 'Sichtbar?',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
    },

    // === Bildergrid ===

    // === Warum Confias ===
    {
      name: 'whyConfias',
      title: 'Warum Confias',
      type: 'object',
      fieldset: 'whyConfias',
      fields: [
        {
          name: 'visible',
          title: 'Sichtbar?',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'headline',
          title: 'Überschrift',
          type: 'string',
          validation: (Rule) => Rule.required().error('Überschrift ist erforderlich'),
        },
        {
          name: 'points',
          title: 'Unterpunkte',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.min(1).error('Mindestens ein Unterpunkt ist erforderlich'),
        },
      ],
    },

    // === Testimonials ===
    {
      name: 'Testimonialsinfo',
      title: 'Hinweis für Testimonials',
      type: 'string',
      readOnly: true,
      description: 'Die Testimonials werden in der eigenen "Testimonals Section"-Liste gepflegt.',
    },

    // === Training ===
    {
      name: 'trainingRows',
      title: 'Training Reihen',
      type: 'array',
      fieldset: 'training',
      of: [
        {
          type: 'object',
          title: 'Reihe',
          fields: [
            {
              name: 'visible',
              title: 'Sichtbar?',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'columns',
              title: 'Spalten (3 pro Reihe)',
              type: 'array',
              validation: (Rule) =>
                Rule.length(3).error('Genau 3 Spalten pro Reihe sind erforderlich'),
              of: [
                {
                  type: 'object',
                  title: 'Spalte',
                  fields: [
                    {
                      name: 'background',
                      title: 'Hintergrund',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Kein Hintergrund', value: 'none'},
                          {title: 'Grauer Hintergrund', value: 'gray'},
                        ],
                        layout: 'radio',
                      },
                      initialValue: 'none',
                    },
                    {
                      name: 'items',
                      title: 'Inhalte',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          title: 'Inhalt',
                          fields: [
                            {
                              name: 'type',
                              title: 'Typ',
                              type: 'string',
                              options: {
                                list: [
                                  {title: 'Überschrift (h2)', value: 'h2'},
                                  {title: 'Überschrift (h3)', value: 'h3'},
                                  {title: 'Absatz', value: 'paragraph'},
                                ],
                                layout: 'radio',
                              },
                            },
                            {
                              name: 'text',
                              title: 'Text',
                              type: 'text',
                              description: 'Nutze \\n für Zeilenumbruch',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'button',
                      title: 'Button (optional, nur rechte Spalte)',
                      type: 'object',
                      fields: [
                        {name: 'label', title: 'Button Text', type: 'string'},
                        {
                          name: 'actionType',
                          title: 'Aktionstyp',
                          type: 'string',
                          options: {list: ['link', 'modal', 'download'], layout: 'radio'},
                          initialValue: 'link',
                        },
                        {name: 'link', title: 'Link / Aktion', type: 'url'},
                        {
                          name: 'file',
                          title: 'Datei (für Download)',
                          type: 'file',
                          options: {accept: 'application/pdf'},
                        },
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
                  preview: {
                    select: {
                      background: 'background',
                      items: 'items',
                    },
                    prepare(selection) {
                      return {
                        title: `Spalte mit Hintergrund: ${selection.background}`,
                        subtitle: selection.items?.map((i) => i.text?.slice(0, 30)).join(' | '),
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              columns: 'columns',
            },
            prepare(selection) {
              return {
                title: `Reihe mit ${selection.columns?.length || 0} Spalten`,
              }
            },
          },
        },
      ],
    },

    // === FAQ ===
    {
      name: 'FAQinfo',
      title: 'Hinweis für FAQ',
      type: 'string',
      readOnly: true,
      description: 'Die FAQ werden in der eigenen "FAQ"-Liste gepflegt.',
    },

    // === Team ===
    {
      name: 'Teaminfo',
      title: 'Hinweis für Team',
      type: 'string',
      readOnly: true,
      description: 'Das Team wird in der eigenen "Team Section"-Liste gepflegt.',
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
