// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terreiro Ogum 7 Lanças",
  description: "Vaquinha para o novo terreiro — cada doação é axé",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="bg-white dark:bg-black text-blue-900 dark:text-red-500 transition-all duration-500 min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}