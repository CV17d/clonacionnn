import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Player UI Clone",
  description: "A spatial UI media player clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
