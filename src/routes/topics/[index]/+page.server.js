import { forumPosts } from '../../../../static/fakedb/fakedata.js'; 


export function load({ params }) {
	const post = forumPosts.find((post) => post.id === params.index);

	return {
		post
	};
}