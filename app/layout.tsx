import type { Metadata } from "next";
import localFont from "next/font/local";
import cn from "clsx";
import "./globals.css";
import Provider from "@/providers/Provider";

const Cruinn = localFont({
  src: "../public/fonts/Cruinn.ttf",
  variable: "--font-cruinn",
});

const Miama_Nueva = localFont({
  src: "../public/fonts/Miama_Nueva.ttf",
  variable: "--font-miama",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Фитилёк",
    default: "Фитилёк",
  },
  description: "Лучший магазин свечей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(Cruinn.variable, Miama_Nueva.variable)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
