<script>
	import ControlCenter from "../components/ControlCenter.svelte";
import Hero from "../components/Hero.svelte";
	import Topics from "../components/Topics.svelte";
	export let data;
	console.log(data)
let forums = data.forums

</script>

<Hero />
<ControlCenter />
<Topics />