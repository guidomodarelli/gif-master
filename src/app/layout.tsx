import { Inter as Inter } from "next/font/google";
import "./globals.css";
import MyApp from "./App";
import { metadata as meta } from "./metadata";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"], preload: false });

export const metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
