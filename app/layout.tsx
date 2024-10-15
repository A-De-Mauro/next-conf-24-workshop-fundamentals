import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Conf 24 - Fundamentals workshop",
  description: "Next.js Conf 24 Fundamentals workshop codebase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className={"font-[family-name:var(--font-geist-mono)]"}>
          {children}
        </div>
      </body>
    </html>
  );
}
