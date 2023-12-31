import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin's Site!",
  description: "Portfolio & Information About Kevin Nguyen",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:text-white dark:bg-zinc-800">
        {children}
      </body>
    </html>
  );
}
