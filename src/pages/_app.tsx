import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes';
import { Header } from '../components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={`${inter.variable} font-custom`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
