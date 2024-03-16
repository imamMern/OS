import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const onest = Onest({
  subsets: ["latin"],
  variable: '--font-Onest'
});

export const metadata: Metadata = {
  title: "OS",
  description: "AI & expert managed growth platform",
  icons: {
    icon:'/assets/OS.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/OS.svg" />
        <title>OS</title>
      </Head>
      <body className={`${onest.variable} font-sans`}>{children}</body>
    </html>
  );
}
