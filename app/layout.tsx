import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/navbar";

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
});

// No longer using Google fonts due to Turbopack compatibility issues

export const metadata: Metadata = {
  title: "Veyronix | Digital Solutions Agency",
  description: "Turning ideas into reality with mobile apps, landing pages, and UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} bg-[#000122] text-gray-100 relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



