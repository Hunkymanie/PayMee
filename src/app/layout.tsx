import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@/components/providers/UserProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paymee - Professional Fintech Dashboard",
  description: "A comprehensive financial dashboard for managing your finances, transactions, and investments in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
