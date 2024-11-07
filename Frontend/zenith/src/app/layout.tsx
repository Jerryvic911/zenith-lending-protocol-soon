'use client'
import * as React from 'react';
import './globals.css';
import dynamic from 'next/dynamic';

const WalletProvider = dynamic(
  () => import('../components/WalletProvider'),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}