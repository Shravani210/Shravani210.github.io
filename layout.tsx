import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shravani Deshmukh | Portfolio",
  description: "AI & Data Science Student Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}