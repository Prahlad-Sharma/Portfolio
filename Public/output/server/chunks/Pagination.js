import { c as create_ssr_component, g as each, h as escape, f as add_attribute } from "./ssr.js";
import { p as postsPerPage } from "./config.js";
const css = {
  code: "img.svelte-t2iib3{opacity:0;transition:all 0.5s ease}",
  map: '{"version":3,"file":"PostsList.svelte","sources":["PostsList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { lazyLoad } from \\"$lib/assets/js/lazyLoad\\";\\nexport let posts = [];\\nfunction getBadgeClass(word) {\\n  switch (word) {\\n    case \\"React\\":\\n      return \\"bg-gray-100 text-gray-800 border-gray-800 border \\";\\n    case \\"Java\\":\\n      return \\"bg-red-100 text-red-800 border-red-800 border \\";\\n    case \\"Angular\\":\\n      return \\"bg-red-100 text-red-800 border-red-800 border \\";\\n    case \\"Javascript\\":\\n      return \\"bg-yellow-100 text-yellow-800 border-yellow-800 border \\";\\n    case \\"Python\\":\\n      return \\"bg-yellow-100 text-yellow-800 border-yellow-800 border \\";\\n    case \\"Android\\":\\n      return \\"bg-green-100 text-green-800 border-green-800 border \\";\\n    case \\"React\\":\\n      return \\"bg-blue-100 text-blue-800 \\tborder-blue-800 border \\";\\n    case \\"TypeScript\\":\\n      return \\"bg-blue-100 text-blue-800 \\tborder-blue-800 border \\";\\n    case \\"NodeJS\\":\\n      return \\"bg-indigo-100 text-indigo-800 border-indigo-800 border \\";\\n    case \\".Net\\":\\n      return \\"bg-purple-100 text-purple-800 border-purple-800 border \\";\\n    case \\"sveltekit\\":\\n      return \\"bg-orange-100 text-orange-800 border-orange-800 border \\";\\n    case \\"AI\\":\\n      return \\"bg-white/[.1] text-gray-600 dark:text-gray-400 border-gray-800 border \\";\\n    default:\\n      return \\"bg-gray-100 text-gray-800 border-gray-800 border\\";\\n  }\\n}\\n<\/script>\\n\\n<div class=\\"flex relative\\">\\n\\t<div class=\\"flex relative\\">\\n\\t\\t<ul class=\\"flex flex-col items-start mx-2 posts-list w-fit md:ml-[5rem] 3xl:ml-[8rem]\\">\\n\\t\\t\\t{#each posts as post}\\n\\t\\t\\t\\t<li class=\\" text-foreground my-5 max-w-[100rem]\\">\\n\\t\\t\\t\\t\\t<article>\\n\\t\\t\\t\\t\\t\\t<a href=\\"/blog/{post.slug}\\" class=\\"flex flex-wrap gap-5 justify-start\\">\\n\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\tuse:lazyLoad={post.coverImage}\\n\\t\\t\\t\\t\\t\\t\\t\\talt=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\theight=\\"1000\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\" w-[470px] 2xl:w-[400px] 3xl:w-[500px] border-2 aspect-{post.coverWidth /\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tpost.coverHeight} rounded-md border-black\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"px-2 md:px-3 md:mt-6 max-w-[35rem] 3xl:max-w-[50rem]\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<h2 class=\\"text-[2rem] leading-[2.2rem] md:text-[2.6rem] md:leading-[3rem]\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{post.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t</h2>\\n\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\"my-1 md:my-4\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each post.categories as word}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"\\n\\t\\t\\t\\t\\tinline-flex items-center mr-1 gap-1.5 py-1 px-2 rounded-full text-xs font-medium\\n\\t\\t\\t\\t\\t{getBadgeClass(word)}\\n\\t\\t\\t\\t  \\">{word}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\"mt-2 text-[1.2rem]\\">{post.excerpt}</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</article>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</div>\\n\\n\\t<div\\n\\t\\tclass=\\"hidden sticky left-0 flex-grow border-l-2 border-black 2xl:flex h-[calc(100vh-4.75rem)] top-[4.75rem] w-[350px]\\"\\n\\t>\\n\\t\\t<input class=\\"w-full border border-black h-[60px] mt-[1.5rem] mr-[2rem] ml-[20px]\\" />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\timg {\\n\\t\\topacity: 0;\\n\\t\\ttransition: all 0.5s ease;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiFC,iBAAI,CACH,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACtB"}'
};
function getBadgeClass(word) {
  switch (word) {
    case "React":
      return "bg-gray-100 text-gray-800 border-gray-800 border ";
    case "Java":
      return "bg-red-100 text-red-800 border-red-800 border ";
    case "Angular":
      return "bg-red-100 text-red-800 border-red-800 border ";
    case "Javascript":
      return "bg-yellow-100 text-yellow-800 border-yellow-800 border ";
    case "Python":
      return "bg-yellow-100 text-yellow-800 border-yellow-800 border ";
    case "Android":
      return "bg-green-100 text-green-800 border-green-800 border ";
    case "React":
      return "bg-blue-100 text-blue-800 	border-blue-800 border ";
    case "TypeScript":
      return "bg-blue-100 text-blue-800 	border-blue-800 border ";
    case "NodeJS":
      return "bg-indigo-100 text-indigo-800 border-indigo-800 border ";
    case ".Net":
      return "bg-purple-100 text-purple-800 border-purple-800 border ";
    case "sveltekit":
      return "bg-orange-100 text-orange-800 border-orange-800 border ";
    case "AI":
      return "bg-white/[.1] text-gray-600 dark:text-gray-400 border-gray-800 border ";
    default:
      return "bg-gray-100 text-gray-800 border-gray-800 border";
  }
}
const PostsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="flex relative"><div class="flex relative"><ul class="flex flex-col items-start mx-2 posts-list w-fit md:ml-[5rem] 3xl:ml-[8rem]">${each(posts, (post) => {
    return `<li class="text-foreground my-5 max-w-[100rem]"><article><a href="${"/blog/" + escape(post.slug, true)}" class="flex flex-wrap gap-5 justify-start"><img alt="" width="500" height="1000" class="${"w-[470px] 2xl:w-[400px] 3xl:w-[500px] border-2 aspect-" + escape(post.coverWidth / post.coverHeight, true) + " rounded-md border-black svelte-t2iib3"}" style="box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);"> <div class="px-2 md:px-3 md:mt-6 max-w-[35rem] 3xl:max-w-[50rem]"><h2 class="text-[2rem] leading-[2.2rem] md:text-[2.6rem] md:leading-[3rem]">${escape(post.title)}</h2> <h3 class="my-1 md:my-4">${each(post.categories, (word) => {
      return `<span class="${"inline-flex items-center mr-1 gap-1.5 py-1 px-2 rounded-full text-xs font-medium " + escape(getBadgeClass(word), true)}">${escape(word)}</span>`;
    })}</h3> <p class="mt-2 text-[1.2rem]">${escape(post.excerpt)}</p></div> </a></article> </li>`;
  })}</ul></div> <div class="hidden sticky left-0 flex-grow border-l-2 border-black 2xl:flex h-[calc(100vh-4.75rem)] top-[4.75rem] w-[350px]" data-svelte-h="svelte-375ws7"><input class="w-full border border-black h-[60px] mt-[1.5rem] mr-[2rem] ml-[20px]"></div> </div>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { totalPosts } = $$props;
  let { path = "/blog/page" } = $$props;
  let pagesAvailable;
  const isCurrentPage = (page) => page == currentPage;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPosts === void 0 && $$bindings.totalPosts && totalPosts !== void 0)
    $$bindings.totalPosts(totalPosts);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  pagesAvailable = Math.ceil(totalPosts / postsPerPage);
  return ` ${pagesAvailable > 1 ? `<nav aria-label="Pagination navigation" class="pagination my-3 mx-auto"><ul class="flex text-foreground justiify-center">${each(Array.from({ length: pagesAvailable }, (_, i) => i + 1), (page) => {
    return `<li class="border-2 text-center rounded-md w-8 mr-2"><a href="${escape(path, true) + "/" + escape(page, true)}"${add_attribute("aria-current", isCurrentPage(page), 0)}> ${escape(page)}</a> </li>`;
  })}</ul></nav>` : ``}`;
});
export {
  PostsList as P,
  Pagination as a
};
