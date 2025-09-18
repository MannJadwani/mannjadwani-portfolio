'use client';

import { useEffect, useMemo, useState } from 'react';
import AnimatedLink from '../../components/AnimatedLink';
import { ArrowLeft, Send, KeyRound, HelpCircle, X, Copy, Download } from 'lucide-react';

type ChatMessage = { role: 'user' | 'model' | 'system'; content: string };

const LS_KEY = 'GEMINI_API_KEY_UI';

export default function GeminiChatPage() {
  const [apiKey, setApiKey] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatError, setChatError] = useState<string>('');
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setApiKey(saved);
  }, []);

  const saveKey = () => {
    localStorage.setItem(LS_KEY, apiKey.trim());
  };

  const sendChat = async () => {
    if (!chatInput.trim() || !apiKey.trim()) return;
    setChatLoading(true);
    setChatError('');
    const nextMessages: ChatMessage[] = [...chatMessages, { role: 'user', content: chatInput } as ChatMessage];
    setChatMessages(nextMessages);
    setChatInput('');
    try {
      const res = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: apiKey.trim(), messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Chat failed');
      const text = data?.text || '';
      setChatMessages((prev) => [...prev, { role: 'model', content: text } as ChatMessage]);
    } catch (e: any) {
      setChatError(e?.message || 'Chat request error');
    } finally {
      setChatLoading(false);
    }
  };

  const transcriptMarkdown = useMemo(() => {
    if (!chatMessages.length) return '';
    const parts: string[] = ['# Gemini Chat Transcript', ''];
    chatMessages.forEach((m, idx) => {
      const title = m.role === 'user' ? 'User' : (m.role === 'model' ? 'Gemini' : 'System');
      parts.push(`## ${idx + 1}. ${title}`);
      parts.push(m.content);
      parts.push('');
    });
    return parts.join('\n');
  }, [chatMessages]);

  const onCopyTranscript = async () => {
    try { await navigator.clipboard.writeText(transcriptMarkdown); } catch {}
  };

  const downloadHref = useMemo(() => {
    if (!transcriptMarkdown) return '';
    const blob = new Blob([transcriptMarkdown], { type: 'text/markdown;charset=utf-8' });
    return URL.createObjectURL(blob);
  }, [transcriptMarkdown]);

  const clearChat = () => setChatMessages([]);

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
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowHelp(true)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm">How to get API key?</span>
          </button>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter Gemini API Key"
            className="w-56 md:w-72 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
          />
          <button
            onClick={saveKey}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2"
          >
            <KeyRound className="w-4 h-4" />
            <span className="text-sm">Save</span>
          </button>
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowHelp(false)}></div>
          <div role="dialog" aria-modal="true" className="relative z-50 w-[92%] max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Get your Gemini API key</h3>
              <button onClick={() => setShowHelp(false)} className="p-1 rounded-lg hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-white/90 text-sm">
              <li>
                Visit <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="underline">Google AI Studio</a> and sign in.
              </li>
              <li>
                Open <span className="font-medium">API Keys</span> and click <span className="font-medium">Create API key</span> (select project if prompted).
              </li>
              <li>
                Copy the key and paste it in the field on this page, then click <span className="font-medium">Save</span> to store it locally.
              </li>
              <li>
                Start chatting. Your key is sent only to your backend route for requests.
              </li>
            </ol>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowHelp(false)} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20">Close</button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">Gemini Chat</h2>
            </div>
            <div className="space-y-3">
              <div className="h-96 overflow-auto bg-black/30 border border-white/10 rounded-xl p-3 space-y-2">
                {chatMessages.length === 0 && (
                  <div className="text-white/50 text-sm">Start a conversation...</div>
                )}
                {chatMessages.map((m, i) => (
                  <div key={i} className={m.role === 'user' ? 'text-white' : 'text-white/80'}>
                    <span className="text-white/50 mr-2">{m.role === 'user' ? 'You' : (m.role === 'model' ? 'Gemini' : 'System')}:</span>
                    {m.content}
                  </div>
                ))}
              </div>

              {/* Transcript Actions */}
              {chatMessages.length > 0 && (
                <div className="flex items-center justify-between">
                  <div className="text-white/80 text-sm">Transcript</div>
                  <div className="flex items-center space-x-2">
                    <button onClick={onCopyTranscript} className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2">
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </button>
                    {downloadHref && (
                      <a href={downloadHref} download="gemini-chat.md" className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Download .md</span>
                      </a>
                    )}
                    <button onClick={clearChat} className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition text-sm">Clear</button>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
                />
                <button
                  onClick={sendChat}
                  disabled={chatLoading || !chatInput.trim() || !apiKey.trim()}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition disabled:opacity-50"
                >
                  {chatLoading ? 'Sending...' : (!apiKey.trim() ? 'Enter API Key' : 'Send')}
                </button>
              </div>
              {chatError && <div className="text-red-400 text-sm">{chatError}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
