import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sagar amruth",
  description:
    "vibemarketer and aura farmer for brands and creators living at the intersection of tech and media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("sa-theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
