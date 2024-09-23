import { f as fetchPosts } from "../../../../chunks/fetchPosts.js";
import { j as json } from "../../../../chunks/index.js";
const prerender = true;
const GET = async () => {
  const options = {
    limit: -1
  };
  const { posts } = await fetchPosts(options);
  return json(posts);
};
export {
  GET,
  prerender
};
