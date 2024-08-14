<script>
	export let data;
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import { Auth } from "@supabase/auth-ui-svelte";
	import { ThemeSupa } from "@supabase/auth-ui-shared";
	import { goto, invalidateAll } from "$app/navigation";
	let { supabase, session } = data;
	$: ({supabase, session } = data)

	//if session is null there is no user.
	supabase.auth.onAuthStateChange(async(event, session) => {
		if(event === "SIGNED_IN") {
			invalidateAll();
		}
		if(event === "SIGNED_OUT"){
			await goto("/");
			invalidateAll();
		}
	})
</script>

<Nav data={data}/>
<slot></slot>
<Footer />
