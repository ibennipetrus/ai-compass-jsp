import client from "../../sanityClient";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, answers, score, persona } = req.body;

  try {
    const doc = {
      _type: "readinessResult",
      name,
      email,
      answers,
      score,
      persona,
      createdAt: new Date().toISOString(),
    };
    const result = await client.create(doc);
    res.status(200).json({ id: result._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save" });
  }
}
