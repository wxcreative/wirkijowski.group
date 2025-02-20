import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

import {LayoutNavbar} from "components/@Layout/Navbar";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WXGroup",
  description: "Holistic Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MontserratSans.variable} antialiased`}
      >
        <LayoutNavbar></LayoutNavbar>
        {children}
      </body>
    </html>
  );
}
