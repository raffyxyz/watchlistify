import type { Metadata } from "next";
import ReactQueryWrapper from "@/components/react-query-wrapper";
import MainLayout from "@/components/layouts/main-layout";
import GoogleAnalytics from "@/components/google-analytics";
import { Toaster } from "@/components/ui/toaster";
import classNames from "classnames";
import { LATO } from "@/next.font";
import "./globals.css";

const fontClass = classNames(LATO.variable);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get server side session

  return (
    <html className={fontClass} lang="en">
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <ReactQueryWrapper>
          <MainLayout>{children}</MainLayout>
        </ReactQueryWrapper>
        <Toaster />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: { default: "Dranime", template: "%s | Dranime" },
  description: "Watch Anime and Drama online for free at dranime.xyz",
  generator: "Next.js",
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.APP_URL as string),
  openGraph: {
    title: `Watch Anime and Drama online for free at dranime.xyz`,
    type: "website",
    images: "/images/logo.png",
    description: `The best website to watch anime and drama for free at Dranime.`,
  },
  authors: [
    { name: "Raffy Amoguis" },
    {
      name: "Raffy Amoguis",
      url: "https://raffy.tech/",
    },
  ],
};
