import type { Metadata } from "next";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { AuthProvider } from "@/database/authContext";

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
      className="h-full antialiased font-sans"
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
