import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../utils/fontawesome'
// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunflowerC",
  description:
    "An e-commerce platform specializing in fashion and accessories, showcases a variety of modern and traditional clothing, including Chinese-inspired designs like Qipao dresses.",
  icons: {
    icon: [
      { url: '/SunflowerC.png', sizes: '32x32' },
      { url: '/SunflowerC.png', sizes: '192x192' },
      { url: '/SunflowerC.png', sizes: '512x512' },
    ],
    apple: { url: '/SunflowerC.png', sizes: '180x180' }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased text-black min-h-screen`}
      >
        <Navbar />
        <main className="h-[calc(100vh-64px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
