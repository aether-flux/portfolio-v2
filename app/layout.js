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

const siteUrl = process.env.SITE_URL || "https://amartya-dev.vercel.app";

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Amartya Chowdhury",
  jobTitle: "Web Developer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/amartya-chowdhury",
    "https://github.com/xerctia",
  ],
};

export const metadata = {
  title: "Amartya Chowdhury",
  description:
    "Portfolio website of Amartya Chowdhury, a web developer in React and Next js, and Express. See all of Amartya's skills, works, projects, experience and other professional aspects.",
  icons: {
    icon: "/faviconPort.ico",
  },
  // openGraph: {
  //   type: "website",
  //   url: siteUrl,
  //   title: "Amartya Chowdhury's Portfolio",
  //   description: "Showcasing web development projects, skills, and more.",
  //   images: [
  //     {
  //       url: `${siteUrl}/og-img.jpg`,
  //       width: 1200,
  //       height: 630,
  //       alt: "My Portfolio Image",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Amartya Chowdhury's Portfolio",
  //   description: "Showcasing web development projects, skills, and more.",
  //   image: `${siteUrl}/og-img.jpg`,
  // },
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
