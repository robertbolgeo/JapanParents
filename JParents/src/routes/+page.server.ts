import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

export const load = async({ url, locals: { getSession } }) => {
   const session = await getSession()

   const {data} = await supabase.from("forums_table").select();
   return {
      forums: data ?? []
   }

   if (session) {
      throw redirect(303, "/")
   }

   return {url: url.origin}
}