<script lang='ts'>
	import Registration from "../../../components/Registration.svelte"
	import { Auth } from "@supabase/auth-ui-svelte";
	import { ThemeSupa } from "@supabase/auth-ui-shared";
	import { goto } from "$app/navigation";
	export let data;
	let { supabase, session } = data;
	$: ({supabase, session } = data)
	$: if(session){
		goto("/")
	}

</script>

<Registration><Auth 
	supabaseClient={supabase}
	view="sign_up"
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
	/> </Registration>
