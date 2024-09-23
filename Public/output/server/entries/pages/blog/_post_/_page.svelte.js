import { c as create_ssr_component, h as escape, f as add_attribute, v as validate_component, g as each } from "../../../../chunks/ssr.js";
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const css = {
  code: ".cover-image.svelte-1fkz9at{box-shadow:0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);opacity:0;transition:all 0.5s ease}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->\\n<script lang=\\"ts\\">export let data;\\nimport Copy from \\"$lib/components/Copy.svelte\\";\\nimport { lazyLoad } from \\"$lib/assets/js/lazyLoad.js\\";\\nconst { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;\\nconst Posts = data.PostContent;\\nconst len = data.length1;\\nconst wordsPerMinute = 200;\\nlet minutesToRead = Math.max(Math.ceil(len / (wordsPerMinute * 60)), 1);\\nfunction getBadgeClass(word) {\\n  switch (word) {\\n    case \\"React\\":\\n      return \\"bg-gray-100 text-gray-800 border-gray-800 border \\";\\n    case \\"Java\\":\\n      return \\"bg-red-100 text-red-800 border-red-800 border \\";\\n    case \\"Angular\\":\\n      return \\"bg-red-100 text-red-800 border-red-800 border \\";\\n    case \\"Javascript\\":\\n      return \\"bg-yellow-100 text-yellow-800 border-yellow-800 border \\";\\n    case \\"Python\\":\\n      return \\"bg-yellow-100 text-yellow-800 border-yellow-800 border \\";\\n    case \\"Android\\":\\n      return \\"bg-green-100 text-green-800 border-green-800 border \\";\\n    case \\"React\\":\\n      return \\"bg-blue-100 text-blue-800 \\tborder-blue-800 border \\";\\n    case \\"TypeScript\\":\\n      return \\"bg-blue-100 text-blue-800 \\tborder-blue-800 border \\";\\n    case \\"NodeJS\\":\\n      return \\"bg-indigo-100 text-indigo-800 border-indigo-800 border \\";\\n    case \\".Net\\":\\n      return \\"bg-purple-100 text-purple-800 border-purple-800 border \\";\\n    case \\"sveltekit\\":\\n      return \\"bg-orange-100 text-orange-800 border-orange-800 border \\";\\n    case \\"AI\\":\\n      return \\"bg-white/[.1] text-gray-600 dark:text-gray-400 border-gray-800 border \\";\\n    default:\\n      return \\"bg-gray-100 text-gray-800 border-gray-800 border\\";\\n  }\\n}\\n<\/script>\\n\\n<svelte:head>\\n\\t<!-- Be sure to add your image files and un-comment the lines below -->\\n\\t<title>{title}</title>\\n\\t<meta data-key=\\"description\\" name=\\"description\\" content={excerpt} />\\n\\t<meta property=\\"og:type\\" content=\\"article\\" />\\n\\t<meta property=\\"og:title\\" content={title} />\\n\\t<meta name=\\"twitter:title\\" content={title} />\\n\\t<meta property=\\"og:description\\" content={excerpt} />\\n\\t<meta name=\\"twitter:description\\" content={excerpt} />\\n\\t<meta property=\\"og:image\\" content={coverImage} />\\n\\t<meta property=\\"og:image:width\\" content={coverWidth} />\\n\\t<meta property=\\"og:image:height\\" content={coverHeight} />\\n\\t<meta name=\\"twitter:image\\" content={coverImage} />\\n</svelte:head>\\n\\n<article class=\\"flex flex-col mx-2 md:mx-auto post max-w-[1020px]\\">\\n\\t<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->\\n\\n\\t<figure>\\n\\t\\t<img\\n\\t\\t\\tclass=\\"mt-4 mb-5 rounded-md border-black md:mt-6 md:mb-10 cover-image border-[0.2rem] w-[1000px]\\"\\n\\t\\t\\tuse:lazyLoad={coverImage}\\n\\t\\t\\talt={title}\\n\\t\\t\\tstyle=\\"box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);\\"\\n\\t\\t/>\\n\\t</figure>\\n\\t<h1 class=\\"mx-2 text-4xl text-foreground text-left md:text-6xl\\">{title}</h1>\\n\\n\\t<div\\n\\t\\tclass=\\"flex flex-col justify-between items-start mx-2 mt-4 w-full md:flex-row md:items-center md:mt-6 dark:text-gray-400\\"\\n\\t>\\n\\t\\t<div class=\\"flex items-center space-x-3\\">\\n\\t\\t\\t<img\\n\\t\\t\\t\\tloading=\\"lazy\\"\\n\\t\\t\\t\\tsrc=\\"/profile.jpg\\"\\n\\t\\t\\t\\talt=\\"profile\\"\\n\\t\\t\\t\\tclass=\\"w-10 h-10 rounded-full border border-black dark:bg-gray-500 dark:border-gray-700\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<p class=\\"md:text-lg text-md\\">\\n\\t\\t\\t\\tAkshay Kalathil • {updated} • {minutesToRead} min{minutesToRead !== 1 ? 's' : ''}\\n\\t\\t\\t</p>\\n\\t\\t\\t<p class=\\"flex-shrink-0 mt-3 text-lg md:mt-0\\" />\\n\\t\\t</div>\\n\\t\\t<!-- <p class=\\"flex-shrink-0 mt-3 text-lg md:mt-0\\">4 min read • 1,570 views</p> -->\\n\\t\\t<button />\\n\\t</div>\\n\\n\\t<!-- {#each categories as category}\\n\\t\\t\\t<span\\n\\t\\t\\t\\tclass=\\"inline-flex items-center mr-1 gap-1.5 py-1 px-2 rounded-full text-xs font-medium {getBadgeClass(category)}\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t{category}\\n\\t\\t\\t</span>\\n\\t\\t{/each} -->\\n\\n\\t<!-- <div class=\\"mx-2\\">\\n\\t\\t<b>Published:</b>\\n\\t\\t{date}\\n\\t\\t<br /\\n\\t\\t<b>Updated:</b>\\n\\t\\t{updated}\\n\\t</div> -->\\n\\n\\t<div class=\\"relative mx-2 mt-4 blog\\">\\n\\t\\t<Copy>\\n\\t\\t\\t<Posts />\\n\\t\\t</Copy>\\n\\t</div>\\n\\n\\t{#if categories}\\n\\t\\t<aside class=\\"my-8 mx-2\\">\\n\\t\\t\\t<h2 class=\\"text-lg text-foreground text-bold\\">Posted in:</h2>\\n\\t\\t\\t<ul class=\\"flex mt-4 text-sm\\">\\n\\t\\t\\t\\t{#each categories as category}\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"inline-flex items-center mr-3 gap-1.5 py-1 px-2 rounded-full text-xs font-medium {getBadgeClass(category)}\\">\\n\\t\\t\\t\\t\\t\\t\\t<a class=\\"\\" href=\\"/blog/category/{category}/\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{category}\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</aside>\\n\\t{/if}\\n</article>\\n\\n<style>\\n\\t.cover-image {\\n\\t\\tbox-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);\\n\\t\\topacity: 0;\\n\\t\\ttransition: all 0.5s ease;\\n\\t}\\n</style>\\n\\n"],"names":[],"mappings":"AAkIC,2BAAa,CACZ,UAAU,CAAE,MAAM,CAAC,MAAM,CAAC,CAAC,CAAC,IAAI,IAAI,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvD,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACtB"}`
};
const wordsPerMinute = 200;
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
  const Posts = data.PostContent;
  const len = data.length1;
  let minutesToRead = Math.max(Math.ceil(len / (wordsPerMinute * 60)), 1);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `  ${$$result.head += `<!-- HEAD_svelte-7edka5_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta data-key="description" name="description"${add_attribute("content", excerpt, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", title, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", excerpt, 0)}><meta name="twitter:description"${add_attribute("content", excerpt, 0)}><meta property="og:image"${add_attribute("content", coverImage, 0)}><meta property="og:image:width"${add_attribute("content", coverWidth, 0)}><meta property="og:image:height"${add_attribute("content", coverHeight, 0)}><meta name="twitter:image"${add_attribute("content", coverImage, 0)}><!-- HEAD_svelte-7edka5_END -->`, ""} <article class="flex flex-col mx-2 md:mx-auto post max-w-[1020px]"> <figure><img class="mt-4 mb-5 rounded-md border-black md:mt-6 md:mb-10 cover-image border-[0.2rem] w-[1000px] svelte-1fkz9at"${add_attribute("alt", title, 0)} style="box-shadow: 0.3rem 0.3rem 0 hsl(var(--shadowColor) / 1);"></figure> <h1 class="mx-2 text-4xl text-foreground text-left md:text-6xl">${escape(title)}</h1> <div class="flex flex-col justify-between items-start mx-2 mt-4 w-full md:flex-row md:items-center md:mt-6 dark:text-gray-400"><div class="flex items-center space-x-3"><img loading="lazy" src="/profile.jpg" alt="profile" class="w-10 h-10 rounded-full border border-black dark:bg-gray-500 dark:border-gray-700"> <p class="md:text-lg text-md">Akshay Kalathil • ${escape(updated)} • ${escape(minutesToRead)} min${escape(minutesToRead !== 1 ? "s" : "")}</p> <p class="flex-shrink-0 mt-3 text-lg md:mt-0"></p></div>  <button></button></div>   <div class="relative mx-2 mt-4 blog">${validate_component(Copy, "Copy").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Posts, "Posts").$$render($$result, {}, {}, {})}`;
    }
  })}</div> ${categories ? `<aside class="my-8 mx-2"><h2 class="text-lg text-foreground text-bold" data-svelte-h="svelte-kuag04">Posted in:</h2> <ul class="flex mt-4 text-sm">${each(categories, (category) => {
    return `<li><span class="${"inline-flex items-center mr-3 gap-1.5 py-1 px-2 rounded-full text-xs font-medium " + escape(getBadgeClass(category), true) + " svelte-1fkz9at"}"><a class="" href="${"/blog/category/" + escape(category, true) + "/"}">${escape(category)} </a></span> </li>`;
  })}</ul></aside>` : ``} </article>`;
});
export {
  Page as default
};
