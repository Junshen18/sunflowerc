import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunflowerC",
  description:
    "An e-commerce platform specializing in fashion and accessories, showcases a variety of modern and traditional clothing, including Chinese-inspired designs like Qipao dresses.",
  icons: {
    icon: [
      { url: '/SunflowerC1.png', sizes: '32x32' },
      { url: '/SunflowerC2.png', sizes: '192x192' },
      { url: '/SunflowerC3.png', sizes: '512x512' },
    ],
    apple: { url: '/SunflowerC1.png', sizes: '180x180' }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
