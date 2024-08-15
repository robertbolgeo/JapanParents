<script lang="ts">
	export let data;
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import { goto, invalidate, invalidateAll } from "$app/navigation";
	import { onMount } from 'svelte';
	$: ({session, supabase } = data)

	// if session is null there is no user.
onMount(() => {
	const { data } = supabase.auth.onAuthStateChange((_, _newSession) => {
		if (_newSession?.expires_at !== session?.expires_at) {
			invalidate('supabase:auth')
		}	
	});
	return () => data.subscription.unsubscribe()
})
</script>

<Nav data={data}/>
<slot></slot>
<Footer />
