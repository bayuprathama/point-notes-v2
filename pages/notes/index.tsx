import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import supabaseWithJwt from '../../utils/supabaseCreateClient'
import Layout from '../../components/layout'
import { useState } from 'react'
import NoteCard from '../../components/noteCard'

export default function NotesPage() {
  const { data: session } = useSession()
  const [currentIdx, setCurrentIdx] = useState(0)
  const [notes, setNotes] = useState()
  const supabaseAccessToken = session?.supabaseAccessToken
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['notes', supabaseAccessToken],
    queryFn: async () => {
      const { data } = await supabaseWithJwt(supabaseAccessToken)
        .from('categories')
        .select('*, notes(*)')
        .eq('category', 'javascript')

      return data
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  // function handleNextClick() {
  //   setCurrentIdx((prevIdx) => {
  //     if (prevIdx === notes.length - 1) return 0
  //     return prevIdx + 1
  //   })
  // }

  // function handlePrevClick() {
  //   setCurrentIdx((prevIdx) => {
  //     if (prevIdx === 0) return notes.length - 1
  //     return prevIdx - 1
  //   })
  // }
  // if (data) {
  //   const js = data[0].categories.map((data) => {
  //     if (Object.values(data).includes('javascript')) return data
  //   })
  //   setNotes(js[0])
  console.log(notes)
  // }
  if (isLoading) {
    return <p>Loading..</p>
  }
  return (
    <Layout>
      <div>{session && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
    </Layout>
  )
}
