import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Brandon Leventhal | Engineering Leadership",
  description: "Brandon Leventhal is a Senior Engineering Manager at Rippling, previously Apple Wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
