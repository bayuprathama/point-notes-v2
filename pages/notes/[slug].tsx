import supabaseWithJwt from '../../utils/supabaseCreateClient'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import NoteCard from '../../components/noteCard'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function NotePages() {
  const router = useRouter()
  const { slug } = router.query
  const { data: session } = useSession()
  const [currentIdx, setCurrentIdx] = useState(0)

  const supabaseAccessToken = session?.supabaseAccessToken
  const { data: notes, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const { data } = await supabaseWithJwt(supabaseAccessToken)
        .from('notes')
        .select('*')
        .eq('category', slug)

      return data
    },
    enabled: !!supabaseAccessToken,
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
  })

  function handleNextClick() {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === notes.length - 1) return 0
      return prevIdx + 1
    })
  }

  function handlePrevClick() {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === 0) return notes.length - 1
      return prevIdx - 1
    })
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="mt-40">
          <p className="font-semibold text-center text-white">Loading..</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mt-40">
        {notes ? (
          <NoteCard
            note={notes[currentIdx]}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        ) : null}
      </div>
    </Layout>
  )
}
