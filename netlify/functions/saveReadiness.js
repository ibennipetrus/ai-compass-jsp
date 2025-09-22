import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "5z6b0ok7", // dein Sanity Project ID
  dataset: "production",
  apiVersion: "2025-08-12",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // nur hier serverseitig!
});

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);

    const doc = {
      _type: "readinessResult",
      name: body.name,
      email: body.email,
      answers: body.answers,
      score: body.score,
      persona: body.persona,
      createdAt: new Date().toISOString(),
    };

    const result = await client.create(doc);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: result._id }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save" }),
    };
  }
}
