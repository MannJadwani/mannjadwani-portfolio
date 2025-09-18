import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Skills of Mann Jadwani presented in a code editor interface: AI, full‑stack, automation, data, and leadership.',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
