type Role = 'user' | 'model' | 'system';

interface ChatMessage {
  role: Role;
  content: string;
}

function messagesToContents(messages: ChatMessage[]) {
  const contents: any[] = [];
  for (const msg of messages || []) {
    const role = msg.role === 'system' ? 'user' : msg.role;
    contents.push({ role, parts: [{ text: msg.content }] });
  }
  return contents;
}

export async function POST(req: Request) {
  try {
    const { messages, prompt, model, apiKey: clientKey } = await req.json();
    const apiKey = clientKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing apiKey. Provide in body or set GEMINI_API_KEY.' }), { status: 400 });
    }

    const contents = messages && Array.isArray(messages)
      ? messagesToContents(messages)
      : [{ role: 'user', parts: [{ text: String(prompt || '') }] }];

    const modelName = model || 'gemini-2.5-flash';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({ contents }),
    });

    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Gemini API error', details: data }), { status: res.status });
    }

    const text = (data?.candidates?.[0]?.content?.parts || [])
      .map((p: any) => p?.text)
      .filter(Boolean)
      .join('');

    return new Response(JSON.stringify({ text, raw: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Server error', details: err?.message || String(err) }), { status: 500 });
  }
}
