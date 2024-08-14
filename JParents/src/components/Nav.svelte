<script lang="ts">
	export let data;
	import { Auth } from "@supabase/auth-ui-svelte";
	import { ThemeSupa } from "@supabase/auth-ui-shared";
	import { goto } from "$app/navigation";
	let { supabase, session } = data;
	$: ({supabase, session } = data)

</script>
<header class="flex flex-col relative z-20 bg-primary-800">
   <div class="max-w-[1400] mx-auto w-full flex items-center justify-between p-4 py-6">
      <a href= "/">
         <h1 class="font-semibold text-primary-900">
            JP <span class="text-primary-300">arents</span>
         </h1>
      </a>
      <button class="md:hidden grid place-items-center">
         <i class="fa-solid fa-bars"></i>
      </button>
      <nav class="hidden md:flex items-center gap-4 lg:gap-6">
         <a href="#control-center" class="duration-200 hover:underline text-primary-300 cursor-pointer">Control Center</a>
         <a href="#topics" class="duration-200 hover:underline text-primary-300 cursor-pointer">Latest News</a>
         <div>
            {#if session === null}
            <!-- create an auto display change for if a user is logged in to show username and a signout button -->
            <a href="/users/login" class="duration-200 text-primary-300 cursor-pointer hover:underline">Log in /</a>
         <a href="/users/registration" class="duration-200 hover:underline text-primary-300 cursor-pointer">  Sign up</a>
         {:else}
         <p>Welcome <a href="/users/{session.user.email}" class="duration-200 text-primary-300 cursor-pointer hover:underline">{session.user.email}</a></p>
         <button on:click={async () => await supabase.auth.signout()} class="duration-200 text-primary-300 cursor-pointer hover:underline">Log out </button>
         {/if}
      </div>
         <a href="/topics/new">
         <button class="specialBtn">
            <p>Start a conversation!</p>
         </button>
      </a>
      </nav>
   </div>
</header>

<style>

</style>