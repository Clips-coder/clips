import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clips - Turn Views Into Revenue",
  description: "Modern clipping marketplace connecting creators and brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
