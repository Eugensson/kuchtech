import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KuchTech",
  description:
    "Постачальник професійного обладнання для кафе, барів та ресторанів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="min-h-screen flex flex-col w-full max-w-[320px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto p-2">
              <Header />
              {children}
              <Footer />
              <Toaster />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
