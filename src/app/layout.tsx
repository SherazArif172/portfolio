import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sheraz Arif | Full-Stack Developer (React.js, Next.js, Node.js, Laravel)",
  description: "I’m Sheraz Arif, a Full-Stack Developer with 10+ years of PHP/Laravel expertise and 2+ years of experience in React.js, Next.js, and Node.js. I specialize in building fast, scalable, and SEO-optimized web applications for startups, agencies, and businesses.",
  icons: {
    icon: "/images/navimage.png",
    shortcut: "/images/navimage.png",
    apple: "/images/navimage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full relative`}
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
