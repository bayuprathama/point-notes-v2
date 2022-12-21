import { ReactNode } from 'react'
import Header from './header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[390px] min-h-screen mx-auto bg-repeat bg-slate-900 bg-grid">
      <Header />
      <main className="px-4">{children}</main>
    </div>
  )
}
