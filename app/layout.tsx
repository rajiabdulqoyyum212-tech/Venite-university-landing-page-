import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingBackground } from '@/components/floating-background';
import { Preloader } from '@/components/preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Venite University',
  description: 'Official website for Venite University',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <Preloader />
        <ThemeProvider>
          <FloatingBackground />
          <Header />
          <main className="flex-1 flex flex-col z-10 relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
