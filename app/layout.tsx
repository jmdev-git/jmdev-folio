import type { Metadata } from "next";
import { DM_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Mark Depaclayon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${merriweather.variable} antialiased dark:bg-gray-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <script src="https://cdn.jotfor.ms/agent/embedjs/019b11280151746a9bdd877559139ccb111e/embed.js"></script>
      </body>
    </html>
  );
}
