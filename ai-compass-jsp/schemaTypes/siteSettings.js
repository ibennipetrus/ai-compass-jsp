export default {
  name: 'siteSettings',
  title: 'Website Einstellungen',
  type: 'document',
  fields: [
    {
      name: 'speakersSubHeadline',
      title: 'Schulungspersonal (Subheadline)',
      type: 'string',
      description: 'Überschrift für Schulungspersonal',
    },
    {
      name: 'speakersHeadline',
      title: 'Unsere Redner (Headline)',
      type: 'string',
      description: 'Hauptüberschrift für die Speaker-Liste',
    },
  ],
}
