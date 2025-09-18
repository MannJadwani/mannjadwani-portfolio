import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Mann Jadwani to discuss AI products, full‑stack development, automation, and data platforms.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
