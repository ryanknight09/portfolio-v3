import { TailwindIndicator } from "@/components/theme/TailwindIndicator";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan's Web Development & Design Portfolio",
  description:
    "Discover Ryan's expertise in web development and design through his portfolio, featuring projects, skills, and experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          property="og:title"
          content="Ryan's Web Development & Design Portfolio"
        />
        <meta
          property="og:description"
          content="Discover Ryan's expertise in web development and design through his portfolio, featuring projects, skills, and experience."
        />
        <meta property="og:image" content="/images/me.jpg" />
        <meta
          property="og:url"
          content="https://portfolio-v3-rho-teal.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Ryan's Web Development & Design Portfolio"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased scroll-smooth h-screen`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SanityLive />
        <TailwindIndicator />
      </body>
    </html>
  );
}
