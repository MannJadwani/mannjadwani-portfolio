'use client';

import AnimatedLink from '../components/AnimatedLink';
import { ArrowLeft, FileText, Send } from 'lucide-react';

export default function UtilityIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <AnimatedLink 
          href="/"
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 hover:bg-white/20 hover:text-white transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Utility</span>
        </AnimatedLink>
        <div className="text-center px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          <span className="text-white font-medium">Tools</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Utilities</h1>
              <p className="text-white/70 text-sm md:text-lg">Quick developer tools powered by Mistral OCR and Google Gemini. Pick a card below to get started.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatedLink
            href="/utility/mistral-ocr"
            className="flex items-center space-x-3 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition relative overflow-hidden group"
          >
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">Mistral OCR</div>
              <div className="text-white/60 text-sm">Extract text from images or PDFs</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </AnimatedLink>

          <AnimatedLink
            href="/utility/gemini-chat"
            className="flex items-center space-x-3 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition relative overflow-hidden group"
          >
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">Gemini Chat</div>
              <div className="text-white/60 text-sm">Direct Gemini API chat</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </AnimatedLink>

          <AnimatedLink
            href="/utility/prompt-book"
            className="flex items-center space-x-3 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition relative overflow-hidden group sm:col-span-2"
          >
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">🧠</span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">Prompt Book</div>
              <div className="text-white/60 text-sm">12 curated prompts for research, coding, and project planning</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
}
