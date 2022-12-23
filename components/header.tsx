import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

//  todos: fix sign out button in MenuHeader ✅

export default function Header() {
  const router = useRouter()
  console.log(router.pathname)
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  if (router.pathname === '/') {
    return <HomeHeader session={session} />
  }
  return <MenuHeader pathname={router.pathname} />
}

const MenuHeader = ({ pathname }: { pathname: string }) => {
  return (
    <div className="w-full shadow-lg bg-slate-900">
      <div className="flex items-center justify-between px-4 py-4">
        <Link
          href={pathname === '/notes' ? '/' : '/notes'}
          className="flex items-center flex-1 gap-4 text-sm text-slate-400"
        >
          <span>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="#94A3B8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 13L1 7l6-6"
              ></path>
            </svg>
          </span>{' '}
          Back
        </Link>
        <p className="flex-1 text-lg font-medium text-center text-slate-300">
          {pathname === '/notes' ? 'Category' : 'Notes'}
        </p>
        <div className="flex justify-end flex-1 w-full">
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault()
              signOut({ callbackUrl: 'http://localhost:3000' })
            }}
            className="inline-block px-4 py-2 text-sm border rounded-lg text-slate-400 border-slate-700"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  )
}

function HomeHeader({ session }) {
  return (
    <div className="w-full shadow-lg bg-slate-900">
      {!session ? (
        <div className="flex items-center justify-between px-4 py-4">
          {/* <div className="text-slate-300">Menu</div> */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="34"
                fill="none"
                viewBox="0 0 37 34"
              >
                <circle cx="13.714" cy="20.174" r="11.429" fill="#fff"></circle>
                <circle
                  cx="13.959"
                  cy="20.353"
                  r="2.538"
                  fill="#CBD5E1"
                ></circle>
                <path
                  fill="#38BDF8"
                  d="M13.475 20.724l23.169-2.857L24.55.175 13.475 20.724z"
                ></path>
              </svg>
            </Link>
            <h1 className="font-medium text-white">Point-Notes</h1>
          </div>

          <div>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signIn('google', { callbackUrl: 'http://localhost:3000/notes' })
              }}
              className="inline-block px-4 py-2 text-sm text-white rounded-lg bg-sky-400"
            >
              Sign in
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-4 py-4">
          {/* <div className="text-slate-300">Menu</div> */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="34"
                fill="none"
                viewBox="0 0 37 34"
              >
                <circle cx="13.714" cy="20.174" r="11.429" fill="#fff"></circle>
                <circle
                  cx="13.959"
                  cy="20.353"
                  r="2.538"
                  fill="#CBD5E1"
                ></circle>
                <path
                  fill="#38BDF8"
                  d="M13.475 20.724l23.169-2.857L24.55.175 13.475 20.724z"
                ></path>
              </svg>
            </Link>
            <h1 className="font-medium text-white">
              Hi, {session.user.name?.split(' ')[0]}!
            </h1>
          </div>

          <div>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signOut({ callbackUrl: 'http://localhost:3000' })
              }}
              className="inline-block px-4 py-2 text-sm border rounded-lg text-slate-400 border-slate-700"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
