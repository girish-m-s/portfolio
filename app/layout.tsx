import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Girish M S - Machine Learning Engineer & Data Engineer",
  description: "Portfolio of Girish M S - Machine Learning Engineer, Data Engineer, and LLM Specialist. Building AI-powered solutions and scalable data systems.",
  keywords: ["Machine Learning", "Data Engineering", "LLM", "AI", "Python", "AWS", "Portfolio"],
  authors: [{ name: "Girish M S" }],
  openGraph: {
    title: "Girish M S - ML Engineer & Data Engineer",
    description: "Portfolio showcasing machine learning, data engineering, and AI projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-primary-300 selection:text-primary-900`}>
        {children}
      </body>
    </html>
  );
}

