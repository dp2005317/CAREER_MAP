import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { AuthProvider } from "@/database/authContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased font-sans ${inter.variable} ${inter.className}`}
    >
      <body className={`min-h-full flex flex-col font-sans ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="careermap-theme"
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
