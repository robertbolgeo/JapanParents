// import type { PageServerLoad } from './$types'

// export const load: PageServerLoad = async ({ locals: { supabase } }) => {
//   const { data: forums } = await supabase.from('forums_table').select('').limit(12).order('date_created')
//   return { forum: forums ?? [] }
// }