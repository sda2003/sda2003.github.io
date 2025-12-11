// app/layout.js
import "./globals.css";
import { Inter } from 'next/font/google';
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sithum Alwis - Portfolio",
  description: "Personal portfolio built with Next.js",
  icons: {
    icon: [
      { url: '/favicon.png' },

    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* PWA support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Main container matching original structure */}
        <div className="page page_wrap one-page-enabled relative min-h-screen">
          
          {/* Original background gradient with bubbles */}
          <div className="background gradient fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#50a3a2] to-[#78cc6d] dark:from-gray-900 dark:to-gray-800 transition-all duration-300"></div>
            
            {/* Bubble animation background */}
            <ul className="bg-bubbles absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <li 
                  key={i}
                  className="absolute rounded-full bg-white/10 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 60}px`,
                    height: `${20 + Math.random() * 60}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${15 + Math.random() * 20}s`
                  }}
                ></li>
              ))}
            </ul>
          </div>
          
          {/* Client-side interactive layout */}
          <ClientLayout>{children}</ClientLayout>
          
          {/* Original theme popup buttons (hidden by default) */}
          <div className="bsl-popup fixed bottom-6 right-6 z-40 opacity-0 pointer-events-none" data-theme="ryancv" data-category="wordpress">
            <div className="bsl-popup__buttons"></div>
          </div>
          
        </div>
      </body>
    </html>
  );
}