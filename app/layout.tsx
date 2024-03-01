import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Discover With Aaron",
    default: "Discover With Aaron",
  },
  description:
    "Unveil mysteries of the universe alongside Aaron in this adventurous journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-[calc(100vh-40px-32px)] p-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
