import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { AuthProvider } from "@/database/authContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://careermap-ai.vercel.app"),
  title: "CareerMap AI",
  description: "Spatial Career Discovery & Real-Time Job Intelligence across India",
  openGraph: {
    title: "CareerMap AI",
    description: "Spatial Career Discovery & Real-Time Job Intelligence across India",
    url: "https://careermap-ai.vercel.app",
    siteName: "CareerMap AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerMap AI",
    description: "Spatial Career Discovery & Real-Time Job Intelligence across India",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased font-sans ${plusJakarta.variable} ${plusJakarta.className}`}
    >
      <body className={`min-h-full flex flex-col font-sans ${plusJakarta.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="careermap-theme"
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
