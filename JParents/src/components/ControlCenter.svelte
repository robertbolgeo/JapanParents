<script>
	import SectionWrapper from './SectionWrapper.svelte';

	let icons = [
		{
			icon: 'fa-solid fa-user',
			topic: 'Become a member',
			text: 'Register to become a member today to start sharing and learning'
		},
		{
			icon: 'fa-solid fa-link',
			topic: 'Useful Resources',
			text: "Things we've gathered during our time as parents, so you don't have to"
		},
		{
			icon: 'fa-solid fa-book',
			topic: 'Guidelines',
			text: 'Before you make a post, make sure you start here'
		},
		{
			icon: 'fa-solid fa-user-tie',
			topic: 'Connect with a professional',
			text: "When asking peers just isn's enough, professional help for those who need it"
		},
		{
			icon: 'fa-solid fa-comments',
			topic: 'Join the Conversation',
			text: 'Start a new topic or see what other people are talking about'
		}
	];
</script>

<SectionWrapper id="control-center">
	<div
		class="block float-none text-align-center justify-between text-center max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1093px] self-center my-auto"
	>
   <div class="flex flex-wrap pb-8 mx-auto my-8">
		{#each icons as icon, index}
			<div class="flex flex-wrap md:flex-nowrap w-1/2 md:w-1/5">
				<div
					class="box-border block w-full rounded px-2 py-4 text-slate-900 transition delay-150 ease-in-out hover:text-blue-300 md:px-0 hover:cursor-pointer"
				>
					<div class='h[80px] md:h[112px] mb-2 inline-block w-full text-blue-300 text-8xl md:mb-4'>
                  <i class={icon.icon}></i></div>
					<h4 class="font-bold mb-2">{icon.topic}</h4>
					<p class="mb-4">{icon.text}</p>
            </div>
               </div>
		{/each}
	</div>
</SectionWrapper>
