import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Loader from "./components/loader";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Ramdani - Web Developer",
  description: "Full-Stack Web Developer creating modern digital solutions and helping businesses deliver impactful online experiences.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`font-poppins antialiased h-screen md:p-[10px] bg-gray-800`}
      >
            <Loader />
        {children}
      </body>
    </html>
  );
}
