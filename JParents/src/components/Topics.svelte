<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	import { formatDistanceToNow } from 'date-fns';

	const forumPosts = [
		{
         id: 1,
			title: 'The Challenges of Raising Bilingual Children in Japan',
			created_by: 'User 1',
			date_of_last_comment: '2024-08-02T09:45:00',
		},
		{
         id: 2,
			title: 'Navigating the Japanese Education System',
			created_by: 'User 2',
			date_of_last_comment: '2024-08-04T12:30:00'
		},
		{
         id: 3,
			title: 'Balancing Work and Family Life in Japan',
			created_by: 'User 1',
			date_of_last_comment: '2024-08-06T11:00:00'
		},
		{
         id: 4,
			title: 'Cultural Differences in Parenting Styles',
			created_by: 'User 4',
			date_of_last_comment: '2024-08-08T16:10:00'
		},
		{
         id: 5,
			title: 'Finding Extracurricular Activities for Kids in Japan',
			created_by: 'User 5',
			date_of_last_comment: '2024-08-10T10:50:00'
		},
		{
         id: 6,
			title: 'Healthcare and Vaccination for Children in Japan',
			created_by: 'User 2',
			date_of_last_comment: '2024-08-10T15:30:00'
		},
		{
         id: 7,
			title: 'Tips for Traveling with Kids in Japan',
			created_by: 'User 2',
			date_of_last_comment: '2024-08-11T16:55:00'
		},
		{
         id: 8,
			title: 'Preparing for School Admissions in Japan',
			created_by: 'User 3',
			date_of_last_comment: '2024-08-12T11:30:00'
		}
	];
	function fromNow(dateStr) {
		const date = new Date(dateStr);
		return formatDistanceToNow(date, { addSuffix: true });
	}

</script>

<SectionWrapper id="topics">
	
	<table class="table-auto border-collapse self-center w-2/3 border border-slate-600 text-s md:text-m lg:text-lg xl:text-xl">
		<thead>
			<tr>
				<th colspan="3" class="border bg-blue-950 text-white border-slate-600">Latest Topics</th>
			</tr>
		</thead>
		<tbody class="text-center">
			<tr class="border border-collapse border-slate-600 hidden sm:table-row">
				<td>Subject:</td>
				<td class="px-6">Created by:</td>
				<td class="px-6">Latest comment:</td>
			</tr>
			{#each forumPosts as post, index}
				<tr id={index.toString()} class={index % 2 === 0 ? 'bg-blue-300 border border-collapse border-slate-600' : "border border-collapse border-slate-600"}>
					<td class="hover:text-slate-400 hover:underline py-8 px-4 md:pr-24"><a href="/topics/{post.id}">{post.title}</a></td>
					<td class="hidden md:table-cell">{post.created_by}</td>
					<td class="hidden md:table-cell">{fromNow(post.date_of_last_comment)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</SectionWrapper>
