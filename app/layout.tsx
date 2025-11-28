import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "./components/navBar";
import BackgroundBalls from "./components/backgroundBalls/backgroundBalls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Dønvang - Portfolio",
  description: "Peter Dønvang's personal portfolio site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row bg-background font-sans text-foreground`}
      >
        <div className="absolute inset-0 z-0 w-full h-min-screen">
          <div className="w-full h-full">
            <BackgroundBalls />
          </div>
        </div>
        <NavigationMenuDemo />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
