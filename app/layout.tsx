import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx or app/page.tsx

export const metadata: Metadata = {
  title: "BuddyFi - Find your perfect dev teammate for hackathons",
  description:
    "BuddyFi helps developers find ideal hackathon teammates using on-chain profiles and smart matching. Built on Solana.",
  metadataBase: new URL("https://buddyfi.xyz"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BuddyFi",
    description: "Smart team matching for developers. Powered by Solana.",
    url: "https://buddyfi.xyz",
    siteName: "BuddyFi",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: "BuddyFi",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuddyFi",
    description: "Smart matching for developers to team up for hackathons.",
    images: ["/og-image.png"],
    creator: "@buddyfii", // optional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MLMRDKBE9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLMRDKBE9Z');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BuddyFi",
            url: "https://buddyfi.xyz",
            sameAs: [
              "https://x.com/buddyfii",
              "https://www.linkedin.com/company/buddyfii",
            ],
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
