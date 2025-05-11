import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarity Systems Studio",
  description: "Build your brand with clarity. Digital tools, eBooks, planners, and AI-generated websites.",
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
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

