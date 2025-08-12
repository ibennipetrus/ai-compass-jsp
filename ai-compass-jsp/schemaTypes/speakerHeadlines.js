export default {
  name: 'speakerHeadlines',
  title: 'Speaker Headlines',
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
      title: 'Unsere Redner (Hauptheadline)',
      type: 'string',
      description: 'Hauptüberschrift für die Speaker-Liste',
    },
  ],
}
