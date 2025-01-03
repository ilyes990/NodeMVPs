import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "MVP Agency",
  description: "Turning Ideas into Impactful MVPs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



