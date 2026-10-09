import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Famiya Zanaib — Content Strategist, Writer & Creative",
  description: "Famiya Zanaib's portfolio: 1,000+ SEO articles, short-form video editing, creative strategy, and leadership in Multan, Pakistan.",
  openGraph: { title: "Famiya Zanaib — Words that work. Stories that stay.", description: "Content strategy, SEO writing, video editing and leadership.", type: "website", images: [{ url: "/og-image.svg", width: 1200, height: 630 }] },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
