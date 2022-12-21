import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <div className="w-full bg-slate-900">
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
              className="px-4 py-2 text-sm text-white rounded-lg bg-sky-400"
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
                signOut()
              }}
              className="px-4 py-2 text-sm text-white rounded-lg bg-sky-400"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
