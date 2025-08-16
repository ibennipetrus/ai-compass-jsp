export default {
  name: 'Homepage',
  title: 'Beratung',
  type: 'document',
  fieldsets: [
    {name: 'header', title: 'Header-Bereich', options: {collapsible: true, collapsed: false}},
    {name: 'grid', title: 'Grid-Bereich', options: {collapsible: true, collapsed: true}},
    {name: 'faq', title: 'FAQ', options: {collapsible: true, collapsed: true}},
    {name: 'whyAct', title: 'Warum handeln', options: {collapsible: true, collapsed: true}},
    {name: 'benefits', title: 'Benefits', options: {collapsible: true, collapsed: true}},
    {name: 'whyConfias', title: 'Warum Confias', options: {collapsible: true, collapsed: true}},
    {name: 'training', title: 'Training-Sektion', options: {collapsible: true, collapsed: true}},
    {name: 'teamSection', title: 'Team Section', options: {collapsible: true, collapsed: true}},
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      options: {collapsible: true, collapsed: true},
    },
    {name: 'Footer', title: 'Footer', options: {collapsible: true, collapsed: true}},
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
      name: 'speakerHeadlines',
      title: 'Speaker Headlines',
      type: 'object',
      fieldset: 'grid', // oder ein neues Fieldset, z.B. 'speakers'
      fields: [
        {name: 'speakersSubHeadline', title: 'Schulungspersonal (Subheadline)', type: 'string'},
        {name: 'speakersHeadline', title: 'Unsere Redner (Hauptheadline)', type: 'string'},
        {name: 'visible', title: 'Sichtbar?', type: 'boolean', initialValue: true},
      ],
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Titel',
              type: 'text',
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
            {
              name: 'visible',
              title: 'Sichtbar?',
              type: 'boolean',
              initialValue: true,
              description: 'Ausblenden, wenn nicht sichtbar sein soll',
            },
          ],
        },
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
    {
      name: 'imageGrid',
      title: 'Image Grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'visible', title: 'Sichtbar', type: 'boolean', initialValue: true},
            {name: 'wideImage', title: 'Längliches Bild', type: 'image', options: {hotspot: true}},
            {
              name: 'squareImage',
              title: 'Quadratisches Bild',
              type: 'image',
              options: {hotspot: true},
            },
          ],
        },
      ],
    },

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
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fieldset: 'testimonialsSection',
      fields: [
        {
          name: 'visible',
          title: 'Sichtbar',
          type: 'boolean',
          initialValue: true,
        },
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
                  options: {hotspot: true},
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
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      fieldset: 'faq',
      fields: [
        {
          name: 'visible',
          title: 'Sichtbar?',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Überschrift',
          type: 'string',
          initialValue: 'FAQ',
        },
        {
          name: 'questions',
          title: 'Fragen & Antworten',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'question', title: 'Frage', type: 'string'},
                {name: 'answer', title: 'Antwort', type: 'text'},
                {
                  name: 'visible',
                  title: 'Sichtbar?',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {q: 'question'},
                prepare: ({q}) => ({title: q || 'Neue Frage'}),
              },
            },
          ],
        },
      ],
    },

    // === Team ===
    {
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fieldset: 'teamSection', // kein 'document', sondern ein eingebettetes Objekt
      fields: [
        {name: 'visible', title: 'Sichtbar', type: 'boolean', initialValue: true},
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
                {name: 'photo', title: 'Foto', type: 'image', options: {hotspot: true}},
              ],
            },
          ],
        },
      ],
    },

    // === Footer ===
    {
      name: 'footerSection',
      title: 'Footer Section',
      type: 'object',
      fieldset: 'Footer',
      fields: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'companyName',
          title: 'Firmenname',
          type: 'string',
          initialValue: 'Confias AI Solutions GmbH',
        },
        {
          name: 'street',
          title: 'Straße & Hausnummer',
          type: 'string',
          initialValue: 'Lange Reihe 15',
        },
        {
          name: 'city',
          title: 'Bezirk & Stadt',
          type: 'string',
          initialValue: '20099 Hamburg',
        },
        {
          name: 'hrInfo',
          title: 'HR / Amtsgericht',
          type: 'string',
          initialValue: 'HR B 180145 (Amtsgericht Hamburg)',
        },
        {
          name: 'website',
          title: 'Webseite',
          type: 'string',
          initialValue: 'www.confias.ai',
        },
        {
          name: 'email',
          title: 'E-Mail',
          type: 'string',
          initialValue: 'info@confias.ai',
        },
        {
          name: 'legalLinks',
          title: 'Rechtliche Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string'},
                {name: 'path', type: 'string'},
              ],
            },
          ],
          initialValue: [
            {label: 'Impressum', path: '/impressum'},
            {label: 'Datenschutzerklärung', path: '/datenschutz'},
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
