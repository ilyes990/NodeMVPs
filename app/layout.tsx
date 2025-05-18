import "./globals.css";
import "./font-optimization.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import { ReactNode } from "react";
import Head from "next/head";

// Use local font fallback instead of Google fonts to avoid Turbopack issues
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
  display: 'swap', // Ensure text remains visible during font loading
  preload: true,   // Preload the font files
});

// No longer using Google fonts due to Turbopack compatibility issues

export const metadata: Metadata = {
  title: "Veyronix | Digital Solutions Agency",
  description: "Turning ideas into reality with mobile apps, landing pages, and UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
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
        {/* Preload critical images */}
        <link 
          rel="preload" 
          href="/images/sky.jpg" 
          as="image" 
        />
      </head>
      <body className={`${poppinsFont.className}  text-gray-100 relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



