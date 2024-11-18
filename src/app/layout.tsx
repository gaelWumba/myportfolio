"use client";

import { useLenis } from "@/hooks/useLenis";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLenis();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
