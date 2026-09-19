import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A2Max Bio | Performance e Inteligência de Negócios",
  description:
    "Social Hub oficial da A2Max — Performance e Inteligência de Negócios.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
