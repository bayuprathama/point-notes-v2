import { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import { useRouter } from 'next/router'

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const bgGrid = router.pathname === '/' ? "bg-[url('/img/grid.svg')]" : ''
  return (
    <div
      className={`max-w-[390px] ${bgGrid} min-h-screen mx-auto bg-repeat bg-slate-900 bg-grid flex flex-col`}
    >
      <Header />
      <main className="h-full px-4">{children}</main>
      <Footer />
    </div>
  )
}
