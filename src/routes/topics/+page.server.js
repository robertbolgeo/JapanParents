import {forumPosts} from "../../../static/fakedb/fakedata"

export function load() {
   summaries: forumPosts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      date_updated: post.date_updated
   }))
}