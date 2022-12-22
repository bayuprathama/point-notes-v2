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
    // refetchOnMount: false,
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
      <div className="mt-40 text-slate-300">
        <div>
          {categories.map((cat) => {
            return (
              <div className="py-4 border-b border-slate-700">
                <Link href={`/notes/${cat.category}`}>
                  {sentenceCase(cat.category)}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
