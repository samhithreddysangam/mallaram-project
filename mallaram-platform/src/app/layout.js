import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mallaram Digital Governance Platform | AI-Powered Smart Rural Governance",
  description: "AI-powered smart governance platform for Mallaram Gram Panchayat. Complete rural governance operating system with transparency, agriculture intelligence, citizen services, and water governance.",
  keywords: "Mallaram, Gram Panchayat, Smart Village, Digital Governance, AI, Telugu, Rural Governance",
  openGraph: {
    title: "Mallaram Digital Governance Platform",
    description: "AI Powered Smart Rural Governance Platform - Transforming Mallaram with intelligent digital infrastructure",
    type: "website",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6366f1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
