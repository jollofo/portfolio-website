import type { Metadata } from "next";
import "./globals.css";

const title = "James Muguiyi · Forward-Deployed / Applied AI Engineer";
const description =
  "I build the agents, integrations, and automations that take hours of manual work off a team. NYC-based, MS in AI in Business at Simon Business School (Dec 2026).";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmuguiyi.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "James Muguiyi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
