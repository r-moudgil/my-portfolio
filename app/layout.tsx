/** app/layout.tsx */
import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Rudrakshi Moudgil – Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Rudrakshi Moudgil – Portfolio</title>
      </head>
      <body className="text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
