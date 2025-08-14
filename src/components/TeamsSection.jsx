import React, { useEffect, useState } from "react";
import client from "../sanityClient";

const TeamSection = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Homepage"][0]{
      "team": teamSection{
        visible,
        members[]{
          name,
          role,
          description,
          "photoUrl": photo.asset->url
        }
      }
    }`
      )
      .then((data) => setTeamData(data.team))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  if (!teamData) return <p>Lädt...</p>;
  if (!teamData || !teamData.visible) return null;
  if (!teamData.members || teamData.members.length === 0)
    return <p>Keine Teammitglieder vorhanden.</p>;

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamData.members.map(
          ({ name, role, description, photoUrl }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={photoUrl}
                alt={`${name} - ${role}`}
                className="w-full h-72 object-center object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-green-600 font-medium mb-3">{role}</p>
                <p className="text-gray-700 text-sm text-justify">
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TeamSection;
