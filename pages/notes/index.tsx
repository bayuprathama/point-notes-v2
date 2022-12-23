import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import supabaseWithJwt from '../../utils/supabaseCreateClient'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import sentenceCase from '../../utils/sentenceCase'
import Link from 'next/link'

export default function NotesPage() {
  const { data: session } = useSession()

  const supabaseAccessToken = session?.supabaseAccessToken
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await supabaseWithJwt(supabaseAccessToken)
        .from('categories')
        .select('category')

      return data
    },
    enabled: !!supabaseAccessToken,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  if (isLoading) {
    return (
      <Layout>
        <div className="mt-40">
          <p className="font-semibold text-center text-white">Loading..</p>
        </div>
      </Layout>
    )
  }

  console.log('render')
  return (
    <Layout>
      <div className="mt-4 text-slate-300">
        <ul className="mt-4">
          {categories?.map((cat, idx) => {
            return (
              <li key={idx} className="border-b border-slate-700">
                <Link
                  className="inline-block py-4"
                  href={`/notes/${cat.category}`}
                >
                  {sentenceCase(cat.category)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
