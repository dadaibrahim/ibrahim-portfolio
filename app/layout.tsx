import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { site } from "@/lib/data";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.summary,
  keywords: site.keywords,
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.summary,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Portfolio`,
    description: site.summary
  },
  metadataBase: new URL("https://dadaibrahim.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container-nice py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
