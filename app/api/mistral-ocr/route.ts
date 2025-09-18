export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { documentUrl, base64Data, includeImageBase64 = false, apiKey: clientKey } = body || {};

    const apiKey = clientKey || process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing apiKey. Provide in body or set MISTRAL_API_KEY.' }), { status: 400 });
    }

    if (!documentUrl && !base64Data) {
      return new Response(JSON.stringify({ error: 'Provide documentUrl or base64Data' }), { status: 400 });
    }

    let document: Record<string, string>;

    if (base64Data) {
      const value = String(base64Data);
      const isDataUri = value.startsWith('data:');
      const dataUri = isDataUri ? value : `data:image/jpeg;base64,${value}`;
      if (dataUri.startsWith('data:application/pdf')) {
        document = { type: 'document_url', document_url: dataUri } as any;
      } else {
        document = { type: 'image_url', image_url: dataUri } as any;
      }
    } else {
      const url: string = documentUrl;
      const isPdf = url.toLowerCase().includes('.pdf') || url.startsWith('data:application/pdf');
      document = isPdf ? ({ type: 'document_url', document_url: url } as any) : ({ type: 'image_url', image_url: url } as any);
    }

    const payload = {
      model: 'mistral-ocr-latest',
      document,
      include_image_base64: !!includeImageBase64,
    };

    const res = await fetch('https://api.mistral.ai/v1/ocr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Mistral OCR error', details: data }), { status: res.status });
    }

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Server error', details: err?.message || String(err) }), { status: 500 });
  }
}
