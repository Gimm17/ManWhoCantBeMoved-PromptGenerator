import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Can't Be Moved — Prompt Studio",
  description: 'Generate AI image prompt untuk trend The Man Who Can\'t Be Moved. Konfigurasi scene, karakter anime/kdrama/film, pose, dan vibe — lalu copy prompt ke Gemini, Midjourney, atau Flux.',
  openGraph: {
    title: "Can't Be Moved — Prompt Studio",
    description: 'Generate AI image prompt untuk trend The Man Who Can\'t Be Moved',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-page font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
