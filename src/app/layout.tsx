import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.imhotep-tech.com'),
  title: 'Imhotep Tech — Software Studio & Engineering Lab | Cairo',
  description:
    'A software studio building custom web apps, APIs, enterprise workflows, and developer tools. We build things people actually use.',
  keywords: [
    'Imhotep Tech',
    'software studio',
    'custom web applications',
    'Django development',
    'React development',
    'Next.js',
    'Egypt software company',
    'Cairo developer',
    'Karim Bassem',
    'business automation',
    'developer tools',
    'PWA offline-first',
  ],
  authors: [{ name: 'Karim Bassem Joseph', url: 'https://kbassem.imhotep-tech.com' }],
  creator: 'Imhotep Tech',
  icons: {
    icon: '/it.ico',
    shortcut: '/it.ico',
    apple: '/it-square.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.imhotep-tech.com',
    title: 'Imhotep Tech — Custom Software Studio & Engineering Lab',
    description:
      'A software studio building custom web apps, APIs, enterprise workflows, and developer tools. We build things people actually use.',
    siteName: 'Imhotep Tech',
    images: [
      {
        url: '/it.png',
        width: 1200,
        height: 630,
        alt: 'Imhotep Tech Software Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imhotep Tech — Software Studio & Engineering Lab',
    description:
      'A software studio building custom web apps, APIs, enterprise workflows, and developer tools.',
    creator: '@Imhoteptech1',
    images: ['/it.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B1019] text-[#F8FAFC] selection:bg-[#D4AF37]/30 selection:text-white antialiased min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
