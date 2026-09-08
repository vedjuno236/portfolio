import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Lao } from "next/font/google";

const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao", "latin"],
  variable: "--font-noto-sans-lao",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Vedjuno ",
  description: "High-performance creative portfolio featuring Next.js 16, Three.js, React Three Fiber, GSAP, and Framer Motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSansLao.variable} bg-[#09090b] text-white antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
