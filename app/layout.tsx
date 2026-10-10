import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Famiya Zanaib — Events By Ussss Founder | Digital Marketing & SEO Writer",
  description: "Famiya Zanaib, co-founder of Events By Ussss. Digital marketing, content creation, lead generation, cold calling, email marketing and SEO article writing.",
  openGraph: { title: "Famiya Zanaib — Events, marketing, content that connects.", description: "Events By Ussss, digital marketing, lead generation, email campaigns, content creation and SEO writing.", type: "website", images: [{ url: "/og-image.svg", width: 1200, height: 630 }] },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
