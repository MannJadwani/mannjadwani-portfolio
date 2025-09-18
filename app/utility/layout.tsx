import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utility',
  description: 'Developer utilities: Mistral OCR and Gemini chat tools.',
};

export default function UtilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
