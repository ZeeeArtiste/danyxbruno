import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenscope',
  description: 'Votre boussole pour l’ESG',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
