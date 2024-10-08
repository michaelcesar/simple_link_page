import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';

const Poppins = localFont({
  src: [
    {
      path: './fonts/poppins-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/poppins-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/poppins-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/poppins-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/poppins-700.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Arco Content',
  description: 'Arco Content - Produtos digitais que mudam negócios.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo.svg" />
        <title>Arco Content</title>
      </head>
      <body className={`${Poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
