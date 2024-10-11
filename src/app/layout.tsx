import { Footer } from "@/templates/Footer";
import { Hero } from "@/templates/Hero";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import ZaloChatButton from "./_views/ZaloChatButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Xe cưới Minh Phát - cho thuê xe cưới cao cấp giá rẻ",
  description: "Dịch vụ cho thuê xe cưới Minh Phát",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <div className="antialiased">
            <Hero />
            {children}
            <Footer />
            <ZaloChatButton />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
