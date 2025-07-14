const TeamSection = () => {
  const team = [
    {
      name: "Jan Schmidt-Prüfer",
      role: "Geschäftsführer",
      description:
        "Jan ist Seriengründer und berät seit knapp 20 Jahren Unternehmen in den Bereichen Finanzen, Strategie, Prozesse und digitalem Commerce. Mit einem starken Fokus auf kaufmännische Abläufe findet er effiziente Lösungen zur Automatisierung und Effizienzsteigerung. Als absoluter KI-Enthusiast fungiert er als Experte für KI-Prompting und die Auswahl der richtigen Tools.",
      photo: "images/Jan.jpg",
    },
    {
      name: "Dr. Dirk Weiss",
      role: "Geschäftsführer",
      description:
        "Dirk ist seit über 20 Jahren in der Top-Management-Beratung tätig, u.a. bei Roland Berger und als Gründungsgesellschafter der Beratungsfirma Maison Blanc. Seine Schwerpunkte liegen in der digitalen Transformation und der nachhaltigen Strategie. Fasziniert von den Möglichkeiten der künstlichen Intelligenz für Unternehmen, konzipiert er zukunftsweisende Geschäftsmodelle.",
      photo: "images/Dirk.jpg",
    },
    {
      name: "Dr. Marc Immenroth",
      role: "Partner",
      description:
        "Marc verbindet psychologisches mit technologischem Know-how. Als promovierter Sportpsychologe hat er sich zunächst auf den Hochleistungssport und Erwachsenenbildung spezialisiert. Es folgten fast zwei Jahrzehnte im Großkonzern mit Changemanagement und der Umsetzung von digitalen Projekten. Marc steht für essentielle Fertigkeiten einer erfolgreichen KI-Transformation.",
      photo: "images/Marc.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Die Geschäftsführer und Gesellschafter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map(({ name, role, description, photo }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={photo}
              alt={`${name} - ${role}`}
              className="w-full h-72 object-center object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{name}</h3>
              <p className="text-green-600 font-medium mb-3">{role}</p>
              <p
                className="text-gray-700 text-sm text-justify
              "
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
