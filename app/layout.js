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

const siteUrl = process.env.SITE_URL || "https://amarch.vercel.app";

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Amartya Chowdhury",
  jobTitle: "Web Developer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/amartya-chowdhury",
    "https://github.com/aether-flux",
  ],
};

export const metadata = {
  title: "Amartya Chowdhury",
  description:
    "Backend, systems, and DX-focused developer. Working with Rust, Node.js, infra tooling, and developer-first frameworks.",
  icons: {
    icon: "/faviconPort.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amarch",
    title: "Amartya Chowdhury",
    description: "Backend & systems developer focused on Rust, infra, and DX.",
    images: [
      {
        // url: `${siteUrl}/og-img.jpg`,
        url: "/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Amartya Chowdhury - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amartya Chowdhury's Portfolio",
    description: "Showcasing web development projects, skills, and more.",
    image: `${siteUrl}/og-img.jpg`,
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Amartya Chowdhury",
      url: "https://amarch.vercel.app",
      sameAs: [
        "https://github.com/aether-flux",
        "https://linkedin.com/in/amartya-chowdhury",
      ],
      jobTitle: "Backend Developer",
      knowsAbout: [
        "Rust",
        "Backend Systems",
        "Developer Tooling",
        "Node.js",
        "Infra",
      ],
    }),
  },
  alternates: {
    canonical: "https://amarch.vercel.app",
  },
};

// export const metadata = {
//   title: "Amartya Chowdhury",
//   description: "Developer portfolio of Amartya Chowdhury",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
