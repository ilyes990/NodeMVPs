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
  title: "Veyronix | Digital Solutions Agency",
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



