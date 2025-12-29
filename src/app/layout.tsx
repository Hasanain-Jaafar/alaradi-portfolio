import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins,Limelight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const limelight = Limelight({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-limelight',
})

export const metadata: Metadata = {
  title: "Alaradi",
  description: "Alaradi Portfolio",
  icons: "/portfolio.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${poppins.variable} ${limelight.variable} antialiased bg-bg-primary min-h-screen flex flex-col items-center`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
