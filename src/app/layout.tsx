import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Brandon's Personal Page",
  description: "Personal Page for sharing my resume and projects I've worked on",
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
