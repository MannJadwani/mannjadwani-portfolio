'use client';

import { useEffect, useMemo, useState } from 'react';
import AnimatedLink from '../../components/AnimatedLink';
import { ArrowLeft, FileText, Image, Upload, Copy, Download } from 'lucide-react';

export default function MistralOcrPage() {
  const [ocrUrl, setOcrUrl] = useState('');
  const [fileDataUri, setFileDataUri] = useState<string>('');
  const [ocrIncludeImg, setOcrIncludeImg] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrResult, setOcrResult] = useState<any>(null);
  const [ocrError, setOcrError] = useState<string>('');
  const [markdown, setMarkdown] = useState<string>('');

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFileDataUri(result || '');
    };
    reader.onerror = () => {
      setFileDataUri('');
    };
    reader.readAsDataURL(file);
  };

  const toMarkdown = (data: any): string => {
    try {
      const pages = Array.isArray(data?.pages) ? data.pages : [];
      if (!pages.length) return '';
      const sorted = [...pages].sort((a: any, b: any) => (a?.index ?? 0) - (b?.index ?? 0));
      const parts: string[] = [];
      for (const page of sorted) {
        const pageNum = (page?.index ?? 0) + 1;
        const md = String(page?.markdown || '').trim();
        parts.push(`## Page ${pageNum}\n\n${md}\n`);
      }
      return parts.join('\n');
    } catch {
      return '';
    }
  };

  const runOcr = async () => {
    setOcrLoading(true);
    setOcrError('');
    setOcrResult(null);
    setMarkdown('');
    try {
      const body: any = { includeImageBase64: ocrIncludeImg };
      if (fileDataUri) body.base64Data = fileDataUri;
      else body.documentUrl = ocrUrl;

      const res = await fetch('/api/mistral-ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'OCR failed');
      setOcrResult(data);
      setMarkdown(toMarkdown(data));
    } catch (e: any) {
      setOcrError(e?.message || 'OCR request error');
    } finally {
      setOcrLoading(false);
    }
  };

  const canRun = (!!ocrUrl.trim() || !!fileDataUri);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch {}
  };

  const downloadHref = useMemo(() => {
    if (!markdown) return '';
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    return URL.createObjectURL(blob);
  }, [markdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <AnimatedLink 
          href="/utility"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Utilities</span>
        </AnimatedLink>
        <div className="text-center px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          <span className="text-white font-medium">Mistral OCR</span>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Run OCR</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base mb-4">Provide an image/PDF URL or upload a file below. Output is compiled into a single Markdown with page numbers.</p>
            <div className="space-y-3">
              <input
                type="url"
                value={ocrUrl}
                onChange={(e) => setOcrUrl(e.target.value)}
                placeholder="https://... (image or pdf url)"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
              />
              <div className="flex items-center space-x-2">
                <label className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition cursor-pointer flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload image or PDF</span>
                  <input type="file" accept="image/*,application/pdf" className="hidden" onChange={onFileChange} />
                </label>
                {fileDataUri && <span className="text-white/60 text-sm truncate max-w-[50%]">Selected file ready</span>}
              </div>
              <label className="inline-flex items-center space-x-2 text-white/80">
                <input type="checkbox" checked={ocrIncludeImg} onChange={(e) => setOcrIncludeImg(e.target.checked)} />
                <span className="text-sm">Include image base64 in response</span>
              </label>
              <button
                onClick={runOcr}
                disabled={ocrLoading || !canRun}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition disabled:opacity-50"
              >
                <Image className="w-4 h-4" />
                <span>{ocrLoading ? 'Processing...' : 'Run OCR'}</span>
              </button>
              {ocrError && <div className="text-red-400 text-sm">{ocrError}</div>}

              {/* Markdown Output Controls */}
              {markdown && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-white/80 text-sm">Generated Markdown</div>
                    <div className="flex items-center space-x-2">
                      <button onClick={onCopy} className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2">
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">Copy</span>
                      </button>
                      {downloadHref && (
                        <a href={downloadHref} download="ocr-output.md" className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span className="text-sm">Download .md</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <pre className="max-h-96 overflow-auto bg-black/40 border border-white/10 rounded-xl p-3 text-white/80 text-xs whitespace-pre-wrap">
{markdown}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
