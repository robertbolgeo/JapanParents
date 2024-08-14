import { supabase } from "$lib/supabaseClient";

export async function load() {
   const {data} = await supabase.from("forums_table").select();
   return {
      forums: data ?? []
   }
}