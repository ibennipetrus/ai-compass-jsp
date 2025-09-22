export default {
  name: 'readinessResult',
  title: 'Readiness Ergebnisse',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    },
    {
      name: 'answers',
      title: 'Antworten',
      type: 'array',
      of: [{type: 'number'}],
    },
    {
      name: 'score',
      title: 'Score',
      type: 'number',
    },
    {
      name: 'persona',
      title: 'Persona',
      type: 'string',
    },
    {
      name: 'createdAt',
      title: 'Erstellt am',
      type: 'datetime',
    },
  ],
}
