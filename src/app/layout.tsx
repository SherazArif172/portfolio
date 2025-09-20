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
  title: "Sheraz Arif | Full-Stack Developer & Digital Innovator",
  description:
    "🚀 Transform your ideas into powerful web applications with a Full-Stack Developer who delivers excellence. Specialized in React.js, Next.js, Node.js & Laravel. Let's build something amazing together!",
  keywords: "Full Stack Developer, React.js, Next.js, Node.js, Laravel, Web Development, Frontend, Backend, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Sheraz Arif" }],
  creator: "Sheraz Arif",
  publisher: "Sheraz Arif",
  icons: {
    icon: "/images/navimage.png",
    shortcut: "/images/navimage.png",
    apple: "/images/navimage.png",
  },
  openGraph: {
    title: "Sheraz Arif | Full-Stack Developer & Digital Innovator",
    description:
      "🚀 Transform your ideas into powerful web applications with a Full-Stack Developer who delivers excellence. Specialized in React.js, Next.js, Node.js & Laravel. Let's build something amazing together!",
    url: "https://sheraz-kappa.vercel.app",
    siteName: "Sheraz Arif Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/navimage.png",
        width: 1200,
        height: 630,
        alt: "Sheraz Arif - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheraz Arif | Full-Stack Developer & Digital Innovator",
    description:
      "🚀 Transform your ideas into powerful web applications with a Full-Stack Developer who delivers excellence. Specialized in React.js, Next.js, Node.js & Laravel.",
    images: ["/images/navimage.png"],
    creator: "@sherazarif",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
