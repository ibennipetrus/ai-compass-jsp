import client from "@sanity/client";

const sanityClient = client({
  projectId: "5z6b0ok7",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-08-12",
  token: process.env.SANITY_WRITE_TOKEN,
});

export async function handler(event, context) {
  const body = JSON.parse(event.body);

  try {
    const doc = {
      _type: "readinessResult",
      name: body.name,
      email: body.email,
      answers: body.answers,
      score: body.score,
      persona: body.persona,
      createdAt: new Date().toISOString(),
    };

    const result = await sanityClient.create(doc);
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
