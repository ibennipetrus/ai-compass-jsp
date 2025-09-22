import client from "../../sanityClient"; // client hier serverseitig, mit Token

export async function handler(event, context) {
  const { name, email, answers, score, persona } = JSON.parse(event.body);

  const doc = {
    _type: "readinessResult",
    name,
    email,
    answers,
    score,
    persona,
    createdAt: new Date().toISOString(),
  };

  try {
    const result = await client.create(doc);
    return {
      statusCode: 200,
      body: JSON.stringify({ id: result._id }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save" }),
    };
  }
}
