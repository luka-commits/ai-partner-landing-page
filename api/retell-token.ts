export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "RETELL_API_KEY not configured" });
  }

  try {
    const response = await fetch(
      "https://api.retellai.com/v2/create-web-call",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: "agent_e48dc37f8865fe615299f4f416",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      return res
        .status(response.status)
        .json({ error: "Retell API error", details: errorData });
    }

    const data = await response.json();
    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create web call" });
  }
}
