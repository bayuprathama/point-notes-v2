import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from '@next/font/google'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
// set Font for entire app
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SessionProvider>
  )
}
