import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "我的应用 | 首页",
  description: "使用Next.js构建的现代化应用，支持明暗主题切换",
  openGraph: {
    title: "我的Next.js应用",
    description: "支持主题切换的响应式应用",
    type: "website",
    locale: "zh_CN",
    siteName: "我的应用",
  },
  twitter: {
    card: "summary_large_image",
    title: "我的Next.js应用",
    description: "支持主题切换的现代化Web应用",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider defaultTheme="system">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
