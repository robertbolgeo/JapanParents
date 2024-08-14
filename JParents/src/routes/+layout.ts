import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import type {Database} from '../schema'

export const ssr = false;

export const load = async ({fetch, data, depends}: any) => {
   depends('supabase:auth')

   const supabase = createSupabaseLoadClient<Database>({
      supabaseUrl:PUBLIC_SUPABASE_URL, 
      supabaseKey:PUBLIC_SUPABASE_ANON_KEY,
      event: {fetch},
      serverSession: data.session
   })
      
   const {
      data: { session }
   } = await supabase.auth.getSession();

return { supabase, session };

};