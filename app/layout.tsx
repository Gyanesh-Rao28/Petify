import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navigation/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Toaster  />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
