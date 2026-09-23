import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botánica Sistemática",
  description: "Identificador de plantas para Botánica Sistemática FAUBA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
