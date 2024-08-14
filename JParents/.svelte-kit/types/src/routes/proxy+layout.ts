// @ts-nocheck
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { createBrowserClient, createServerClient, isBrowser, parse } from "@supabase/ssr";
import type { LayoutLoad } from "./$types"

export const ssr = false;

export const load = async ({fetch, data, depends}: any) => {
   depends('supabase:auth')

   const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
      global: {
         fetch
      },
      cookies: {
         get(key) {
            if (!isBrowser()) {
               return JSON.stringify(data.session);
            }
            const cookie = parse(document.cookie);
            return cookie[key];
         }
      }
   });
   const {
      data: { session }
   } = await supabase.auth.getSession();

return { supabase, session };

};;null as any as LayoutLoad;