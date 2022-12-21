import { createClient } from '@supabase/supabase-js'
// import { useSession } from 'next-auth/react'
// const { data: session } = useSession()
// const supabaseAccessToken = session?.supabaseAccessToken
const supabaseUrl = 'https://ynagxowdtwcqewathyyh.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
// const supabase = createClient(supabaseUrl, supabaseKey, {
//   global: {
//     headers: {
//       Authorization: `Bearer ${supabaseAccessToken}`,
//     },
//   },
// })
function supabaseWithJwt(supabaseAccessToken: string | undefined) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  })
  return supabase
}
export default supabaseWithJwt
