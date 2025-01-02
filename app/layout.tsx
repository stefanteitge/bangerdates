import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Nav from './lib/ui/nav';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'RC Banger and Stock Car Dates',
  description: 'Just banger dates. And maybe some stock car dates too.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
