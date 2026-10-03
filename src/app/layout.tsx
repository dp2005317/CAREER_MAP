import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { AuthProvider } from "@/database/authContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { GlobalTeamWatermark } from "@/components/team/GlobalTeamWatermark";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageKey = 'careermap-theme';
                  var saved = localStorage.getItem(storageKey);
                  var theme = saved || 'light';
                  var target = theme;
                  if (theme === 'system') {
                    target = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  var root = document.documentElement;
                  if (target === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.remove('dark');
                    root.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`min-h-full flex flex-col font-sans ${plusJakarta.className} relative isolate`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="careermap-theme"
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <AuthProvider>
            <div className="relative z-10 flex-1 flex flex-col">
              {children}
            </div>
            <GlobalTeamWatermark />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
