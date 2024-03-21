import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryWrapper from "@/components/react-query-wrapper";
import MainLayout from "@/components/layouts/main-layout";
import SessionWrapper from "@/components/SessionWrapper";
import GoogleAnalytics from "@/components/google-analytics";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: { default: "WatchListify", template: "%s | WatchListify" },
  description: "Watch Anime and Drama online for free at WatchListify.site",
  generator: "Next.js",
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.APP_URL as string),
  openGraph: {
    title: `Watch Anime and Drama online for free at WatchListify.site`,
    type: "website",
    images: "/images/logo.png",
    description: `The best website to watch anime and drama for free at WatchListify.`,
  },
  authors: [
    { name: "Raffy Amoguis" },
    {
      name: "Raffy Amoguis",
      url: "https://raffy.tech/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={lato.className}>
          <GoogleAnalytics />
          <ReactQueryWrapper>
            <MainLayout>{children}</MainLayout>
          </ReactQueryWrapper>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}
