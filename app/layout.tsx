import Footer from "@/components/footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import Navbar from "../components/navbar";
import "./font-optimization.css";
import "./globals.css";

// Use local font files
const poppinsFont = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Veyronix | Build. Launch. Grow.",
  description: "Turning ideas into reality with mobile apps, landing pages, and UI/UX design.",
  metadataBase: new URL('https://www.veyronixlabs.com'),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppinsFont.variable} font-sans`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="transparent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen font-sans antialiased" style={{ background: 'transparent', position: 'static' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



