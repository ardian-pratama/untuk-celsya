import React from 'react';
import type { Metadata } from 'next';
import { Inter, Agbalumo } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const agbalumo = Agbalumo({
  variable: '--font-agbalumo',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Untuk Celsyaa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body className={`${inter.variable} ${agbalumo.variable}`}>
        <div className='flex flex-col min-h-dvh'>{children}</div>
      </body>
    </html>
  );
}
