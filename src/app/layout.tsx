import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const Noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dev Dossier: James Muguiyi",
  description: "Landing page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Noto.className}>{children}</body>
    </html>
  );
}
