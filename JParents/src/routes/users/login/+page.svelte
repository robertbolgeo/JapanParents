<script lang='ts'>
	export let data;
	import Login from "../../../components/Login.svelte";
	import SectionWrapper from "../../../components/SectionWrapper.svelte";
	import { Auth } from "@supabase/auth-ui-svelte";
	import { ThemeSupa } from "@supabase/auth-ui-shared";
	import { goto } from "$app/navigation";
	let { supabase, session } = data;
	$: ({supabase, session } = data)
	$: if(session){
		goto("/")
	}

</script>

<Login><Auth 
	supabaseClient={data.supabase}
	view="sign_in"
	redirectTo={`${data.url}/auth/callback`}
	appearance={{
		theme: ThemeSupa,
	}
}
	localization={{
		variables: {
			sign_in: {
				email_input_placeholder:'example@example.co.jp',
				password_input_placeholder:'Your password here',
				link_text:"Already have an account? Sign in here"

			},
			sign_up:{
				email_input_placeholder:'example@example.co.jp',
				password_input_placeholder:'Please use at least 6 characters',
				link_text:"Don't have an account? Sign up here"
			}
		}
	}}
	/> </Login>
